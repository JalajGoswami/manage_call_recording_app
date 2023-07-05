import React from 'react'
import { Form, Input, Row, message } from 'antd'
import Button from 'antd/es/button'
import '@/styles/Recordings.css'
import { Recording } from '@prisma/client';

type PropTypes = {
    recording: Recording | undefined;
}

export default function SaveAsForm({ recording }: PropTypes) {
    const [messageApi, contextHolder] = message.useMessage()

    function saveAs({ name }: { name: string; }) {
        if (!recording) {
            messageApi.open({
                type: 'error',
                content: 'Select a recording from table.'
            })
            return;
        }
        const link = document.createElement("a")
        document.body.appendChild(link)
        link.download = name + '.' + recording.recording.split('.').pop()
        link.target = '_blank'
        link.href = recording.recording
        link.click()
        document.body.removeChild(link)
    }

    return (
        <Row justify='center'>
            {contextHolder}
            <Form
                name="save-as-form"
                initialValues={{ remember: true }}
                className='save-as-form'
                onFinish={saveAs}
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
