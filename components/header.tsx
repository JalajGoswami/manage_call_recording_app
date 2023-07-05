
import Card from 'antd/es/card/Card'
import Title from 'antd/es/typography/Title'
import React from 'react'

export default function Header() {
    return (
        <Card bordered style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <Title level={2} style={{ marginBottom: 0, color: '#383d48' }}>
                Manage Call Recordings
            </Title>
        </Card>
    )
}