import React from 'react'
import Row from 'antd/es/grid/row'
import { Button, Form, Input, Select, SelectProps } from 'antd'
import DatePicker from 'antd/es/date-picker'
import '@/styles/QueryForm.css'

export default function QueryForm() {
    const options: SelectProps['options'] = [{ label: 'First', value: 1 }]

    return (
        <Row justify='center'>
            <Form
                name="query-form"
                labelCol={{ span: 10 }}
                labelAlign='left'
                initialValues={{ remember: true }}
                className='query-form'
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
                        onChange={value => console.log(value)}
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
