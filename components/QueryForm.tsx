import React, { Dispatch, SetStateAction, useState } from 'react'
import Row from 'antd/es/grid/row'
import { Form, Input, Select, SelectProps, message } from 'antd/es'
import Button from 'antd/es/button'
import DatePicker from 'antd/es/date-picker'
import '@/styles/QueryForm.css'
import { Campaign, Recording } from '@prisma/client'
import axios from 'axios'

type Recordings = Recording[] | null | undefined
type PropTypes = {
    campaigns: Campaign[];
    setRecordings: Dispatch<SetStateAction<Recordings>>;
}

export default function QueryForm(
    { campaigns, setRecordings }: PropTypes
) {
    const [campaignIds, setCampaignIds] = useState<number[]>([])
    const [messageApi, contextHolder] = message.useMessage()

    const options: SelectProps['options'] = campaigns.map(c =>
        ({ label: c.name, value: c.id })
    )

    function onSubmit(values: Record<string, any>) {
        values.startDate = values.startDate && values.startDate.$d.toISOString()
        values.endDate = values.endDate && values.endDate.$d.toISOString()
        values.campaignId = campaignIds.join(',')

        Object.keys(values).forEach(k => !values[k] && delete values[k])
        if (Object.keys(values).length === 0) {
            messageApi.open({
                type: 'error',
                content: 'Atleast one field is required to search.'
            })
            return;
        }

        axios.get('/api/recording', { params: values })
            .then(res => setRecordings(res.data))
            .catch(err => messageApi.open({
                type: 'error',
                content: err.response.data.error ?? err.message
            }))
    }

    return (
        <Row justify='center'>
            {contextHolder}
            <Form
                name="query-form"
                labelCol={{ span: 10 }}
                labelAlign='left'
                initialValues={{ remember: true }}
                className='query-form'
                onFinish={onSubmit}
            >
                <Form.Item
                    label="Call Date from"
                    name="startDate"
                >
                    <DatePicker style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item
                    label="Call Date to"
                    name="endDate"
                >
                    <DatePicker style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item
                    label="Phone Number"
                    name="phoneNumber"
                >
                    <Input type='tel' placeholder='Type number' />
                </Form.Item>
                <Form.Item
                    label="Volunteer Number"
                    name="volunteerNumber"
                >
                    <Input placeholder='Type number' />
                </Form.Item>
                <Form.Item
                    label="Campaign Id"
                    name="campaignId"
                >
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Please select"
                        onChange={setCampaignIds}
                        options={options}
                    />
                </Form.Item>
                <Form.Item
                    label="Agent Id"
                    name="agentId"
                >
                    <Input placeholder='Type id' />
                </Form.Item>
                <Form.Item className='action-btns'>
                    <Button type="primary" htmlType="submit">
                        Search
                    </Button>
                    <Button htmlType="reset">
                        Reset
                    </Button>
                </Form.Item>
            </Form>
        </Row>
    )
}
