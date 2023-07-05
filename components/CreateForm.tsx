import React from 'react'
import Row from 'antd/es/grid/row'
import { Button, Form, Input } from 'antd'
import DatePicker from 'antd/es/date-picker'
import '@/styles/CreateForm.css'

export default function CreateForm() {
    return (
        <Row justify='center'>
            <Form
                name="basic"
                labelCol={{ span: 10 }}
                labelAlign='left'
                initialValues={{ remember: true }}
                className='create-form'
            >
                <Form.Item
                    label="Call Date from"
                    name="startDate"
                    rules={[{ required: true, message: 'Please input StartDate' }]}
                >
                    <DatePicker style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    label="Call Date to"
                    name="endDate"
                    rules={[{ required: true, message: 'Please input EndDate' }]}
                >
                    <DatePicker style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item
                    label="Phone Number"
                    name="phoneNumber"
                    rules={[{ required: true, message: 'Please input Phone Number' }]}
                >
                    <Input type='tel' />
                </Form.Item>
                <Form.Item
                    label="Volunteer Number"
                    name="volunteerNumber"
                    rules={[{ required: true, message: 'Please input Volunteer Number' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Campaign Id"
                    name="campaignId"
                    rules={[{ required: true, message: 'Please input Campaign Id' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Agent Id"
                    name="agentId"
                    rules={[{ required: true, message: 'Please input Agent Id' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item className='action-btns'>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                    <Button htmlType="reset">
                        Reset
                    </Button>
                </Form.Item>
            </Form>
        </Row>
    )
}
