import React from 'react'
import { Button, Form, Input, Row } from 'antd'
import '@/styles/Recordings.css'

export default function SaveAsForm() {
    return (
        <Row justify='center'>
            <Form
                name="save-as-form"
                initialValues={{ remember: true }}
                className='save-as-form'
            >
                <Form.Item
                    label="File Name"
                    name="name"
                    rules={[{ required: true, message: 'Input File name' }]}
                >
                    <Input placeholder='Type name' />
                </Form.Item>

                <Form.Item className='action-btns'>
                    <Button type="primary" danger htmlType="submit">
                        Save As
                    </Button>
                </Form.Item>
            </Form>
        </Row>
    )
}
