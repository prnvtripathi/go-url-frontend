import UrlShortenerForm from "@/components/url-shortener-form"

export default function UrlShortenerPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Create Short URL</h1>
            <UrlShortenerForm />
        </div>
    )
}