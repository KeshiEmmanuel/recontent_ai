"use client";
import React, { useState } from "react";
import { Copy, Check, ChevronDown, ChevronRight } from "lucide-react";

const ContentDetailsPage = ({ contentData }) => {
    const [copiedId, setCopiedId] = useState(null);
    const [expandedSections, setExpandedSections] = useState({
        linkedin: true,
        instagram: false,
        facebook: false,
        twitter: false,
        quotes: false,
        email: false,
    });

    const copyToClipboard = (text, id) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const toggleSection = (section) => {
        setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    const CopyButton = ({ text, id }) => (
        <button
            onClick={() => copyToClipboard(text, id)}
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            title="Copy to clipboard"
        >
            {copiedId === id ? (
                <Check className="w-4 h-4 text-green-600" />
            ) : (
                <Copy className="w-4 h-4 text-gray-600" />
            )}
        </button>
    );

    const Section = ({ title, children, sectionKey }) => (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <button
                onClick={() => toggleSection(sectionKey)}
                className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors"
            >
                <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
                {expandedSections[sectionKey] ? (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                )}
            </button>
            {expandedSections[sectionKey] && (
                <div className="p-5 pt-0 border-t border-gray-100">
                    {children}
                </div>
            )}
        </div>
    );

    return (
        <div className="mt-10 p-6">
            <div className="max-w-6xl mx-auto">
                <div className="mb-10">
                    <h1 className="text-3xl font-semibold text-gray-900 mb-1">
                        Your content Pack
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Multi-platform content overview
                    </p>
                </div>

                <div className="space-y-4">
                    <Section title="LinkedIn Content" sectionKey="linkedin">
                        <div className="space-y-4">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-medium text-gray-900 text-sm">
                                        Post Content
                                    </h3>
                                    <CopyButton
                                        text={
                                            contentData.linkedin_content.content
                                        }
                                        id="linkedin-content"
                                    />
                                </div>
                                <p className="text-gray-700 whitespace-pre-wrap bg-gray-50 p-4 rounded text-sm leading-relaxed">
                                    {contentData.linkedin_content.content}
                                </p>
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-900 mb-2 text-sm">
                                    Key Insights
                                </h3>
                                <ul className="space-y-2">
                                    {contentData.linkedin_content.keyInsights.map(
                                        (insight, idx) => (
                                            <li
                                                key={idx}
                                                className="text-gray-700 text-sm flex items-start"
                                            >
                                                <span className="text-gray-400 mr-2">
                                                    •
                                                </span>
                                                <span>{insight}</span>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-900 mb-2 text-sm">
                                    Hashtags
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {contentData.linkedin_content.hashtags.map(
                                        (tag, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm"
                                            >
                                                #{tag}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-900 mb-2 text-sm">
                                    Call to Action
                                </h3>
                                <p className="text-gray-700 bg-gray-50 p-3 rounded text-sm">
                                    {contentData.linkedin_content.callToAction}
                                </p>
                            </div>
                        </div>
                    </Section>

                    <Section title="Instagram Caption" sectionKey="instagram">
                        <div className="space-y-4">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-medium text-gray-900 text-sm">
                                        Caption
                                    </h3>
                                    <CopyButton
                                        text={
                                            contentData.instagram_captions
                                                .content
                                        }
                                        id="instagram-content"
                                    />
                                </div>
                                <p className="text-gray-700 whitespace-pre-wrap bg-gray-50 p-4 rounded text-sm leading-relaxed">
                                    {contentData.instagram_captions.content}
                                </p>
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-900 mb-2 text-sm">
                                    Emojis Used
                                </h3>
                                <div className="flex gap-3 text-2xl">
                                    {contentData.instagram_captions.emojis.map(
                                        (emoji, idx) => (
                                            <span key={idx}>{emoji}</span>
                                        )
                                    )}
                                </div>
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-900 mb-2 text-sm">
                                    Hashtags
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {contentData.instagram_captions.hashtags.map(
                                        (tag, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm"
                                            >
                                                #{tag}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-900 mb-2 text-sm">
                                    Call to Action
                                </h3>
                                <p className="text-gray-700 bg-gray-50 p-3 rounded text-sm">
                                    {
                                        contentData.instagram_captions
                                            .callToAction
                                    }
                                </p>
                            </div>
                        </div>
                    </Section>

                    <Section title="Facebook Content" sectionKey="facebook">
                        <div className="space-y-4">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-medium text-gray-900 text-sm">
                                        Post Content
                                    </h3>
                                    <CopyButton
                                        text={
                                            contentData.facebook_content.content
                                        }
                                        id="facebook-content"
                                    />
                                </div>
                                <p className="text-gray-700 whitespace-pre-wrap bg-gray-50 p-4 rounded text-sm leading-relaxed">
                                    {contentData.facebook_content.content}
                                </p>
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-900 mb-2 text-sm">
                                    Engagement Questions
                                </h3>
                                <ul className="space-y-2">
                                    {contentData.facebook_content.engagementQuestions.map(
                                        (question, idx) => (
                                            <li
                                                key={idx}
                                                className="text-gray-700 text-sm flex items-start"
                                            >
                                                <span className="text-gray-400 mr-2">
                                                    •
                                                </span>
                                                <span>{question}</span>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-900 mb-2 text-sm">
                                    Hashtags
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {contentData.facebook_content.hashtags.map(
                                        (tag, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm"
                                            >
                                                #{tag}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-900 mb-2 text-sm">
                                    Call to Action
                                </h3>
                                <p className="text-gray-700 bg-gray-50 p-3 rounded text-sm">
                                    {contentData.facebook_content.callToAction}
                                </p>
                            </div>
                        </div>
                    </Section>

                    <Section title="Twitter Thread" sectionKey="twitter">
                        <div className="space-y-4">
                            <div className="bg-gray-50 p-4 rounded mb-4 border border-gray-100">
                                <p className="font-medium text-gray-900 text-sm">
                                    Topic:{" "}
                                    {contentData.twitter_threads.threadTopic}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    Total Tweets:{" "}
                                    {contentData.twitter_threads.totalTweets}
                                </p>
                            </div>
                            <div className="space-y-3">
                                {contentData.twitter_threads.tweets.map(
                                    (tweet, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-gray-50 p-4 rounded border border-gray-100"
                                        >
                                            <div className="flex items-start justify-between mb-2">
                                                <span className="text-xs font-medium text-gray-500">
                                                    {tweet.isFirstTweet
                                                        ? "Opening Tweet"
                                                        : `Tweet ${tweet.threadNumber}/${tweet.totalThreads}`}
                                                </span>
                                                <CopyButton
                                                    text={tweet.content}
                                                    id={`tweet-${idx}`}
                                                />
                                            </div>
                                            <p className="text-gray-700 whitespace-pre-wrap text-sm leading-relaxed">
                                                {tweet.content}
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </Section>

                    <Section title="Quotes" sectionKey="quotes">
                        <div className="space-y-3">
                            {Object.entries(contentData.quotes).map(
                                ([key, quote]) => (
                                    <div
                                        key={key}
                                        className="bg-gray-50 p-4 rounded border border-gray-100"
                                    >
                                        <div className="flex items-start justify-between">
                                            <p className="text-gray-700 italic flex-1 text-sm leading-relaxed">
                                                {quote}
                                            </p>
                                            <CopyButton text={quote} id={key} />
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </Section>

                    <Section title="Email Campaign" sectionKey="email">
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-medium text-gray-900 mb-3 text-sm">
                                    Subject Line Variations
                                </h3>
                                <div className="space-y-2">
                                    <div className="bg-gray-50 p-3 rounded border border-gray-100">
                                        <p className="text-xs text-gray-500 font-medium mb-1">
                                            Benefit-Focused
                                        </p>
                                        <p className="text-gray-900 text-sm">
                                            {contentData.email.benefitFocused}
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded border border-gray-100">
                                        <p className="text-xs text-gray-500 font-medium mb-1">
                                            Curiosity-Driven
                                        </p>
                                        <p className="text-gray-900 text-sm">
                                            {contentData.email.curiosityDriven}
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded border border-gray-100">
                                        <p className="text-xs text-gray-500 font-medium mb-1">
                                            Urgency/Scarcity
                                        </p>
                                        <p className="text-gray-900 text-sm">
                                            {contentData.email.urgencyScarcity}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-medium text-gray-900 text-sm">
                                        Email Content
                                    </h3>
                                    <CopyButton
                                        text={contentData.email.content}
                                        id="email-content"
                                    />
                                </div>
                                <p className="text-gray-700 whitespace-pre-wrap bg-gray-50 p-4 rounded text-sm leading-relaxed">
                                    {contentData.email.content}
                                </p>
                            </div>
                        </div>
                    </Section>
                </div>
            </div>
        </div>
    );
};

export default ContentDetailsPage;
