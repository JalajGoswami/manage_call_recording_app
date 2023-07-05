import React from 'react'
import { Button, Space, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { BsPlayCircleFill, BsPauseCircleFill } from 'react-icons/bs'
import { MdDownloadForOffline } from 'react-icons/md'
import '@/styles/Recordings.css'

interface DataType {
    id: number;
    callTime: string;
    phoneNumber: string;
    campaignId: number;
    agentId: number;
    volunteerNumber: number;
    recording: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Call Datetime',
        dataIndex: 'callTime',
        key: 'callTime'
    },
    {
        title: 'Phone Number',
        dataIndex: 'phoneNumber',
        key: 'phoneNumber',
    },
    {
        title: 'Campaign Id',
        dataIndex: 'campaignId',
        key: 'campaignId',
    },
    {
        title: 'Agent Id',
        dataIndex: 'agentId',
        key: 'agentId',
    },
    {
        title: 'Volunteer Number',
        dataIndex: 'volunteerNumber',
        key: 'volunteerNumber',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_i, record) => (
            <Space size="small">
                <Button type='dashed' shape='round' className='recording-btns'>
                    <BsPlayCircleFill /> Play
                </Button>
                {/* <Button type='dashed' shape='round' className='recording-btns'>
                    <BsPauseCircleFill /> Pause
                </Button> */}
                <Button type='dashed' shape='round' className='recording-btns'>
                    <MdDownloadForOffline size={16} /> Save
                </Button>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        id: 1,
        callTime: '11-06-2023',
        phoneNumber: '7579654824',
        campaignId: 808,
        agentId: 1001,
        volunteerNumber: 32,
        recording: 'url'
    }
]

export default function RecordingsTable() {
    return (
        <Table columns={columns} dataSource={data}
            bordered className='recordings-table'
        />
    )
}
