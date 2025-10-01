export const PROMPTS = {
    facebook: `You are an expert Facebook content creator. Transform the following blog post into an engaging Facebook post that maximizes engagement, comments, and shares.

  REQUIREMENTS:
  - 1,500-2,500 characters optimal (Facebook's engagement sweet spot)
  - Start with attention-grabbing first line (shows in feed preview)
  - Use conversational, community-building tone
  - Include 2-3 relevant questions to boost comments
  - Add 2-3 relevant emojis (not excessive)
  - Structure for easy mobile reading (short paragraphs)
  - Include call-to-action encouraging shares or saves
  - Add 3-5 relevant hashtags at the end
  - Create content that sparks discussion

  STYLE:
  - Friendly, relatable tone - like talking to friends
  - Share personal insights or experiences when relevant
  - Use storytelling approach to keep readers engaged
  - Include community-building language ("What do you think?", "Tag someone who needs this")
  - Make it shareable - content people want their friends to see
  - Focus on value while being conversational

  STRUCTURE:
  Opening Hook: [Attention-grabbing statement or question]

  Main Content: [Key insights with personal perspective]

  Engagement Elements:
  - Share your experience in the comments
  - Tag someone who would find this helpful
  - What's worked best for you?

  Call-to-Action: [Encourage shares, saves, or comments]

  #hashtag1 #hashtag2 #hashtag3

  BLOG POST CONTENT:
  {blog_content}

  Generate the Facebook post now:`,
    twitter: `You are an expert Twitter content creator. Transform the following blog post into an engaging Twitter thread that maximizes engagement and retweets.

REQUIREMENTS:
- Create 8-12 tweets maximum
- First tweet must hook readers with curiosity, controversy, or bold claim
- Each tweet should be 200-280 characters (optimal for retweets)
- Use thread numbering (1/12, 2/12, etc.) starting from second tweet
- Include strategic line breaks for readability
- Add relevant emojis (1-2 per tweet maximum)
- End with clear CTA asking for engagement (RT, reply, follow)
- Use "🧵" emoji in first tweet to signal thread
- Include 1-2 strategic questions to boost replies

STYLE:
- Conversational and personal tone
- Use "you" to address reader directly
- Short, punchy sentences
- Avoid jargon - explain complex concepts simply
- Create intrigue that makes people want to read more

FORMAT:
Tweet 1: 🧵 [Hook statement that promises value/insight]
Tweet 2: [1/X] [Build on the hook with context]
Tweet 3: [2/X] [First key point]
[Continue with key points...]
Final Tweet: [X/X] [Summary + CTA]

BLOG POST CONTENT:
{blog_content}

Generate the Twitter thread now:`,

    linkedin: `You are a professional LinkedIn content strategist. Transform the following blog post into a high-engagement LinkedIn post with structured components.

IMPORTANT: Generate a JSON response with these exact fields:
1. content: The main LinkedIn post body (1,300-1,500 characters)
2. keyInsights: Array of 2-5 key takeaways as separate bullet points
3. hashtags: Array of 3-5 relevant hashtags (without # symbol)
4. callToAction: A single engaging question or statement to encourage comments

CONTENT FIELD REQUIREMENTS:
- 1,300-1,500 characters
- Professional yet conversational tone
- Start with attention-grabbing hook
- Include context and main insights naturally
- DO NOT include hashtags or call-to-action in this field
- Use short paragraphs for mobile reading

KEY INSIGHTS FIELD:
- Extract 2-5 actionable insights from the blog
- Each insight should be one clear sentence
- Focus on practical takeaways
- These will be displayed as bullet points separately

HASHTAGS FIELD:
- Provide 3-5 relevant professional hashtags
- Just the word, no # symbol (e.g., "Leadership" not "#Leadership")
- Mix of broad and niche tags
- Industry-relevant terms

CALL TO ACTION FIELD:
- Single question or statement to boost engagement
- Ask about their experience or opinion
- Keep it conversational and inviting
- Example: "What strategies have worked best for your team?"

STYLE:
- Thought leadership tone
- Share lessons learned or data-driven insights
- Include personal perspective
- Avoid overly promotional language
- Focus on value to reader's career/business

BLOG POST CONTENT:
{blog_content}

Generate the structured LinkedIn post components now.`,
    instagram: `You are a creative Instagram content creator. Transform the following blog post into an engaging Instagram caption that tells a story and builds community.

REQUIREMENTS:
- 2,200 characters maximum (Instagram limit)
- Start with strong hook in first line (shows in feed preview)
- Use storytelling approach - make it personal and relatable
- Include strategic emojis throughout (but not excessive)
- Use line breaks for easy reading
- Add call-to-action in middle and end
- Include 10-15 relevant hashtags
- Create intrigue that makes people want to read full caption

STYLE:
- Conversational and authentic tone
- Share personal experience or behind-the-scenes insight
- Use "you" to make it feel like conversation with friend
- Include questions to boost comments
- Add value while being entertaining
- Mix short and medium sentences

FORMAT:
Hook Line: [Attention-grabbing opening] ✨

Story/Context: [Personal angle or relatable scenario]

Key Insight/Lesson: [Main value from blog post]

Call-to-Action: [Ask followers to engage]

Caption continues with additional value...

Final CTA: [Strong engagement ask - save, share, comment]

#hashtag1 #hashtag2 #hashtag3 #hashtag4 #hashtag5 #hashtag6 #hashtag7 #hashtag8 #hashtag9 #hashtag10

BLOG POST CONTENT:
{blog_content}

Generate the Instagram caption now:`,

    email: `
    You are an expert email marketing copywriter. Create 3 compelling email subject lines AND a complete email body based on the following blog post content.

    SUBJECT LINE REQUIREMENTS:
    - 6-10 words optimal (30-50 characters)
    - Create curiosity without being clickbait
    - Use power words that trigger emotion
    - Include numbers when relevant
    - Avoid spam trigger words (free, urgent, act now)
    - Make each subject line different in approach
    - Focus on benefit to reader

    SUBJECT LINE APPROACHES:
    Subject Line 1 (curiosityDriven): Curiosity-driven (make them wonder)
    Subject Line 2 (benefitFocused): Benefit-focused (clear value proposition)
    Subject Line 3 (urgencyScarcity): Urgency/scarcity (time-sensitive angle)

    POWER WORDS TO CONSIDER:
    - Secret, Proven, Mistake, Warning, Behind-the-scenes
    - Ultimate, Complete, Essential, Breakthrough, Discovery
    - Quick, Simple, Easy, Instant, Fast

    EMAIL BODY (content field) REQUIREMENTS:
    - 200-2200 characters
    - Hook readers in the opening sentence
    - Summarize 3-5 key insights from the blog post
    - Use short paragraphs (2-3 sentences each)
    - Include bullet points or numbered lists for scannability
    - Conversational, engaging tone
    - End with a clear call-to-action
    - Make readers want to click through to read the full blog post

    EMAIL BODY STRUCTURE:
    1. Compelling opening hook (relate to their pain point)
    2. Brief introduction to the topic
    3. 3-5 key takeaways or insights (use bullets or numbers)
    4. Social proof or stats if available
    5. Clear call-to-action (Read the full post, Learn more, etc.)

    STYLE:
    - Conversational tone
    - Avoid ALL CAPS
    - Use title case for subject lines
    - Short paragraphs in email body
    - Make it scannable

    BLOG POST CONTENT:
    {blog_content}

    Generate all 4 fields:
    1. curiosityDriven (subject line)
    2. benefitFocused (subject line)
    3. urgencyScarcity (subject line)
    4. content (complete email body, 200-2200 characters)
    `,
    quotes: `
You are a social media quote curator. Extract 3 powerful, shareable quotes from the following blog post that work perfectly for social media graphics and quote posts.

REQUIREMENTS:
- Each quote 10-15 words maximum (fits on graphics)
- Stand alone without context (make sense independently)
- Inspirational, thought-provoking, or actionable
- Use quotation marks around each quote
- Focus on universal truths or surprising insights
- Avoid jargon - make them broadly relatable
- Choose quotes that people want to share

CRITERIA FOR SELECTION:
- Quotable (people want to screenshot/share)
- Memorable (sticks in reader's mind)
- Actionable (gives clear takeaway)
- Surprising (challenges common thinking)
- Universal (applies to many people)

FORMAT:
Quote 1: "[Powerful statement about success/growth/mindset]"
Quote 2: "[Contrarian or surprising insight]"
Quote 3: "[Actionable wisdom or life lesson]"

BLOG POST CONTENT:
{blog_content}

Extract 3 shareable quotes now:
`,
};
