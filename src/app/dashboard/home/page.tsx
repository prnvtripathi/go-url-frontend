'use client'

import { useState } from 'react'
import { Trash2, Plus, ExternalLink, Copy, MoreVertical } from 'lucide-react'
import { format, isAfter } from 'date-fns'

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import UrlShortenerForm from '@/components/url-shortener-form'

type Url = {
    id: string
    originalUrl: string
    shortUrl: string
    expiryDate: Date
    clicks: number
}

export default function Dashboard() {
    const [urls, setUrls] = useState<Url[]>([
        {
            id: '1',
            originalUrl: 'https://www.example.com/very/long/url/that/needs/shortening',
            shortUrl: 'https://short.url/abc123',
            expiryDate: new Date('2024-12-31'),
            clicks: 42
        },
        {
            id: '2',
            originalUrl: 'https://www.anotherlongurl.com/that/also/needs/to/be/shortened',
            shortUrl: 'https://short.url/def456',
            expiryDate: new Date('2024-06-30'),
            clicks: 17
        }
    ])

    const handleDelete = (id: string) => {
        setUrls(urls.filter(url => url.id !== id))
    }

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
    }

    return (
        <div className="flex h-screen">

            <main className="flex-1 p-6 overflow-auto">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-4">
                        <h1 className="text-2xl font-bold">Your Shortened URLs</h1>
                    </div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>
                                <Plus className="mr-2 h-4 w-4" /> Add New URL
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px]">
                            <DialogHeader>
                                <DialogTitle>Add New URL</DialogTitle>
                                <DialogDescription>
                                    Add a new URL to shorten
                                </DialogDescription>
                            </DialogHeader>
                            <UrlShortenerForm isDialog={true} />
                        </DialogContent>
                    </Dialog>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Original URL</TableHead>
                            <TableHead>Short URL</TableHead>
                            <TableHead>Expiry Date</TableHead>
                            <TableHead>Clicks</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {urls.map((url) => (
                            <TableRow key={url.id}>
                                <TableCell className="font-medium">{url.originalUrl}</TableCell>
                                <TableCell>{url.shortUrl}</TableCell>
                                <TableCell>
                                    <span className={isAfter(new Date(), url.expiryDate) ? 'text-red-500' : 'text-green-500'}>
                                        {format(url.expiryDate, 'yyyy-MM-dd')}
                                    </span>
                                </TableCell>
                                <TableCell>{url.clicks}</TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <span className="sr-only">Open menu</span>
                                                <MoreVertical className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem onClick={() => copyToClipboard(url.shortUrl)}>
                                                <Copy className="mr-2 h-4 w-4" /> Copy short URL
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => window.open(url.originalUrl, '_blank')}>
                                                <ExternalLink className="mr-2 h-4 w-4" /> Visit original URL
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem onClick={() => handleDelete(url.id)} className="text-red-600">
                                                <Trash2 className="mr-2 h-4 w-4" /> Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </main>
        </div>
    )
}