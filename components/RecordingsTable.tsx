import React, { useMemo, useState, useRef, Dispatch, SetStateAction } from 'react'
import { Space, Table } from 'antd'
import Button from 'antd/es/button'
import type { ColumnsType } from 'antd/es/table'
import { BsPlayCircleFill, BsPauseCircleFill } from 'react-icons/bs'
import { MdDownloadForOffline } from 'react-icons/md'
import '@/styles/Recordings.css'
import { Campaign, Recording } from '@prisma/client'
import moment from 'moment'


type Recordings = Recording[] | null | undefined
type PropTypes = {
    recordings: Recordings;
    campaigns: Campaign[];
    setSelected: Dispatch<SetStateAction<Recording | undefined>>;
}

export default function RecordingsTable(
    { recordings, campaigns, setSelected }: PropTypes
) {
    const [currentPlaying, setCurrentPlaying] = useState<number | null>(null)
    const [paused, setPaused] = useState(false)
    const audioPlayer = useRef<HTMLAudioElement>()

    function handlePlay(record: Recording) {
        if (!audioPlayer.current) {
            audioPlayer.current = new Audio(record.recording)
            audioPlayer.current.onended = function () {
                setCurrentPlaying(null)
            }
        }

        if (currentPlaying != record.id) {
            audioPlayer.current.pause()
            audioPlayer.current.src = record.recording
            setCurrentPlaying(record.id)
        }

        setPaused(false)
        audioPlayer.current.play()
    }

    function handlePause() {
        audioPlayer.current?.pause()
        setPaused(true)
    }

    const columns: ColumnsType<Recording> = useMemo(() => [
        {
            title: 'Call Datetime',
            dataIndex: 'callTime',
            key: 'callTime',
            render: date => moment(date).format('DD MMM YYYY hh:mm a')
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
            title: 'Campaign Name',
            dataIndex: 'campaignId',
            render: id => campaigns.find(c => c.id === id)?.name
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
            render: (_, record) => (
                <Space size="small">
                    {(currentPlaying !== record.id || paused) ?
                        <Button type='dashed' shape='round'
                            className='recording-btns play-btn'
                            onClick={() => handlePlay(record)}
                        >
                            <BsPlayCircleFill /> Play
                        </Button>
                        :
                        <Button type='dashed' shape='round'
                            className='recording-btns'
                            onClick={handlePause}
                        >
                            <BsPauseCircleFill /> Pause
                        </Button>
                    }
                    <Button href={record.recording} target='_blank' download
                        type='dashed' shape='round' className='recording-btns'
                    >
                        <MdDownloadForOffline size={16} /> Save
                    </Button>
                </Space>
            ),
        },
    ], [campaigns, currentPlaying, paused]);

    if (!recordings) return <></>;

    return (
        <Table columns={columns} dataSource={recordings}
            bordered className='recordings-table' rowKey='id'
            rowSelection={{
                type: 'radio',
                onChange: (ids) => setSelected(
                    recordings.find(r => r.id === ids[0])!
                )
            }}
        />
    )
}
