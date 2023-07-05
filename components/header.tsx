
import Card from 'antd/es/card/Card'
import Title from 'antd/es/typography/Title'
import React from 'react'

export default function Header() {
    return (
        <Card bordered>
            <Title level={2} style={{ marginBottom: 0 }}>
                Manage Call Recordings
            </Title>
        </Card>
    )
}