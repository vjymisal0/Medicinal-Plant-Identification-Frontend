"use client";

import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Leaf, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ResultsPage() {
    const searchParams = useSearchParams();
    const plantName = searchParams.get("plant");
    const searchResults = JSON.parse(searchParams.get("results") || "[]");

    return (
        <main className="min-h-screen bg-black/[0.96] p-6">
            <div className="max-w-4xl mx-auto">
                <Link href="/">
                    <Button variant="ghost" className="text-white mb-6">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Button>
                </Link>

                <Card className="bg-white/10 text-white border-none">
                    <CardHeader>
                        <CardTitle className="flex items-center text-3xl">
                            <Leaf className="mr-2 h-6 w-6 text-green-500" />
                            {plantName}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
                        <div className="grid gap-4">
                            {searchResults.map((result: any, index: number) => (
                                <a
                                    key={index}
                                    href={result.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                                >
                                    <div className="flex items-start justify-between">
                                        <h3 className="font-medium">{result.title}</h3>
                                        <ExternalLink className="h-4 w-4 ml-2 flex-shrink-0" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}