export const PROMPTS = {
    facebook: `Take this blog post and turn it into a Facebook post that'll actually get people talking in the comments and hitting share.

  WHAT I NEED:
  - Somewhere between 1,500-2,500 characters (that's the sweet spot for Facebook engagement)
  - First line needs to stop the scroll - that's all people see before "see more"
  - Write like you're chatting with friends, not broadcasting
  - Ask 2-3 questions throughout to get people commenting
  - Sprinkle in 2-3 emojis where they feel natural
  - Keep paragraphs short - people are reading on their phones
  - Tell them to share or save it at the end
  - Throw in 3-5 hashtags (but keep it at the bottom)
  - Make it the kind of thing people want to discuss

  THE VIBE:
  - Friendly and relatable - you're one of them, not above them
  - Share something real or personal when it fits
  - Tell it like a story so they keep reading
  - Use phrases like "What do you think?" or "Tag someone who needs this"
  - Make people think "oh my friends need to see this"
  - Be helpful but keep it casual

  HOW TO BUILD IT:
  Start with a hook: [Something that makes them stop and pay attention]

  Main part: [The good stuff from the blog, but with your personal spin]

  Get them involved:
  - Ask them to share their story in comments
  - Get them to tag friends
  - Ask what's worked for them

  Wrap it up: [Push them to share, save, or comment]

  #hashtag1 #hashtag2 #hashtag3

  HERE'S THE BLOG POST:
  {blog_content}

  Make it happen:`,
    twitter: `Turn this blog post into a Twitter thread that'll actually get people to stop scrolling and hit retweet.

  Here's the deal:

  BASICS:
  - 8-12 tweets total - no novel-length threads
  - Tweet 1 has to HOOK them. Make a bold claim, drop something surprising, or tease what's coming
  - Keep each tweet between 200-280 characters - that sweet spot for RTs
  - Number them starting from tweet 2 (like 1/10, 2/10, etc.)
  - Break up longer thoughts with line breaks
  - Emojis are cool but keep it to 1-2 per tweet max
  - Last tweet needs a strong CTA - ask for RTs, replies, or a follow
  - Drop a 🧵 in the first tweet so people know it's a thread
  - Throw in a question or two throughout to get replies going

  WRITE IT LIKE A HUMAN:
  - Be conversational. Write how you'd actually talk
  - Say "you" - make it feel direct
  - Short sentences hit harder
  - If it sounds complicated, simplify it. No one's trying to decode tweets
  - Make each tweet interesting enough that they HAVE to see the next one

  HOW IT SHOULD FLOW:
  Tweet 1: 🧵 [Drop the hook - make them curious or say something spicy]
  Tweet 2: [1/X] [Give them context, build anticipation]
  Tweet 3: [2/X] [First main point]
  [Keep the value coming...]
  Last Tweet: [X/X] [Wrap it up + tell them what to do next]

  HERE'S THE BLOG:
  {blog_content}

  Let's see what you got:`,
    linkedin: `You are transforming a blog post into an authentic, human-sounding LinkedIn post that drives real engagement.

HUMAN WRITING PRINCIPLES:
- Write like you're explaining this to a colleague over lunch, not presenting to a board
- Use "I" and "we" - make it personal and relatable
- Include contractions (don't, it's, I've, here's)
- Vary sentence length. Some short. Others longer to explain nuance.
- Show genuine emotion or reaction: "This surprised me" / "I didn't expect this" / "Here's what changed my mind"
- Admit uncertainty where honest: "I'm still figuring this out" / "Not sure about X, but..."

ANTI-PATTERNS TO AVOID (These scream AI):
❌ "In today's rapidly evolving landscape..."
❌ "It's important to note that..."
❌ "Leveraging synergies to drive outcomes..."
❌ Starting with "Imagine if..." or "What if I told you..."
❌ Ending with generic "What are your thoughts?"
❌ Overusing "However," "Moreover," "Furthermore"
❌ Emoji overload 🚀✨💡🔥

FORMAT REQUIREMENTS:
- 1,300-1,500 characters (LinkedIn's engagement sweet spot)
- Mobile-first: 2-3 line paragraphs max
- White space between paragraphs
- Natural bullet format with → or • (not formal numbered lists)

STRUCTURE:

**Hook (2-3 sentences):**
Start with a micro-story, surprising stat with your reaction, or contrarian take.
Examples:
- "I just reviewed 47 proposals. 44 made the same mistake."
- "My team ignored my advice. They were right."
- "Spent $30k learning something I could've Googled."

**Context (1-2 sentences):**
Why you're sharing this now. Make it specific, not generic.
Bad: "In today's business world..."
Good: "After three clients asked the same question this week..."

**Key Insights (3-4 points):**
Use → or • for visual breaks
Make each point ONE clear idea
Include at least one:
- Personal example ("When I tried this...")
- Specific data ("23% increase in...")
- Contrarian insight ("Everyone says X, but...")

Format:
→ Insight 1: [specific, actionable]
→ Insight 2: [includes example or data]
→ Insight 3: [surprising or contrarian angle]

**The "So What" (1-2 sentences):**
Not "In conclusion" - just state the real implication.
What should they do Monday morning? What's the real lesson?

**Engagement Question:**
NOT "What do you think?" or "Agree?"
Ask something specific they can actually answer:
- "What's worked for you when...?"
- "Am I missing something here?"
- "Anyone else seen this pattern?"
- "Which approach has given you better results?"

**Hashtags (3-5):**
Mix of broad industry terms and specific niche topics
Format: #HashTag #AnotherTag #ThirdTag

TONE CALIBRATION:
- Professional but not corporate
- Confident but not arrogant
- Expert insight but stay curious
- Share lessons, not lectures
- Credible without credential-dropping

AUTHENTICITY CHECKS (Before generating, ensure):
✓ Would you say this out loud to a real person?
✓ Is there at least ONE personal detail or experience?
✓ Could this have been written by a human without AI?
✓ Does it sound like YOU, not a generic LinkedIn influencer?
✓ Would you keep reading if you saw this while scrolling?

BLOG POST CONTENT:
{blog_content}

Generate the LinkedIn post now following this structure. Return as JSON matching the LinkedInPostSchema:
{
  "content": "Full post text here...",
  "keyInsights": ["Insight 1", "Insight 2", "Insight 3"],
  "hashtags": ["Tag1", "Tag2", "Tag3"],
  "callToAction": "Specific engagement question"
}`,

    instagram: `Hey! I need you to turn this blog post into an Instagram caption that actually sounds like a real person wrote it - not some corporate marketing robot.

Here's what I'm going for:

MUST-HAVES:
- Keep it under 2,200 characters (that's Instagram's limit)
- First line needs to grab attention - that's what shows up in the feed
- Tell it like a story. Make it personal, you know? Something people can relate to
- Throw in some emojis where they feel natural (don't go overboard though)
- Break it up into shorter paragraphs - nobody wants to read a wall of text
- Ask people to do something in the middle AND at the end
- Add 10-15 hashtags that actually make sense
- Make them curious enough to tap "more" and read the whole thing

THE VIBE:
- Write like you're texting a friend, not giving a presentation
- Share something real - maybe a personal story or what went down behind the scenes
- Talk TO them, not AT them. Use "you" like you're having a conversation
- Ask questions that'll get people commenting
- Be helpful but also fun to read
- Mix it up - some short punchy sentences, some longer ones

HOW TO STRUCTURE IT:
Start with a hook that stops the scroll ✨

Then ease into the story - what's the situation? Why should they care?

Drop the main insight or lesson from the blog

Ask them to engage somehow

Keep going with more good stuff...

End strong - get them to save, share, or comment

#hashtag1 #hashtag2 #hashtag3 #hashtag4 #hashtag5 #hashtag6 #hashtag7 #hashtag8 #hashtag9 #hashtag10

HERE'S THE BLOG POST:
{blog_content}

Now work your magic`,

    email: `
I need you to write 3 email subject lines and a full email body based on this blog post. Make it sound natural - like something you'd actually want to open and read.

SUBJECT LINES (write 3 different ones):
- Keep them 6-10 words, around 30-50 characters
- Make people curious but don't be misleading
- Use words that hit emotionally
- Numbers work well when they fit
- Stay away from spammy stuff like "FREE!!!" or "ACT NOW!!!"
- Each one should take a different angle
- Focus on what's in it for them

THE 3 APPROACHES:
Subject Line 1 (curiosityDriven): Make them curious - leave them wanting to know more
Subject Line 2 (benefitFocused): Show the value - what will they get?
Subject Line 3 (urgencyScarcity): Time-sensitive angle - create some FOMO

WORDS THAT WORK:
- Secret, Proven, Mistake, Warning, Behind-the-scenes
- Ultimate, Complete, Essential, Breakthrough, Discovery
- Quick, Simple, Easy, Instant, Fast

EMAIL BODY (the content field):
- Anywhere from 200-2200 characters
- First sentence needs to grab them
- Pull out 3-5 of the best points from the blog
- Keep paragraphs short - 2-3 sentences max
- Use bullet points or numbers so it's easy to scan
- Write like you're talking to someone, not at them
- End with a clear "here's what to do next"
- The whole point is to get them to click through and read the full post

HOW TO BUILD IT:
1. Start with a hook (touch on something they're struggling with)
2. Set up the topic quickly
3. Give them 3-5 juicy takeaways (bullets or numbered list)
4. Drop in some proof or stats if you've got them
5. Tell them exactly what to do (read the post, learn more, whatever makes sense)

KEEP IT REAL:
- Talk like a human
- Don't YELL IN ALL CAPS
- Subject lines should use title case
- Short paragraphs in the body
- Make it skimmable - people are busy

HERE'S THE BLOG POST:
{blog_content}

Now give me all 4 pieces:
1. curiosityDriven (subject line)
2. benefitFocused (subject line)
3. urgencyScarcity (subject line)
4. content (the full email body, 200-2200 characters)
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

export const PricingPlan = [
    {
        id: 1,
        title: "Free",
        pricingMonthly: "0",
        isPopular: false,
        caption: "Perfect for testing or light usage",
        features: [
            "5 credits per month",
            "All 6 platforms output",
            "Full structured data",
            "No credit card required",
        ],
        highlighted: false,
    },
    {
        id: 2,
        title: "Pro",
        pricingMonthly: "30",
        isPopular: true,
        caption: "Everything you need to scale",
        features: [
            "50 credits per month",
            "All 6 platforms output",
            "Platform Preview Mode",
            "Craft Your own template",
            "Access to early features",
            "Cancel anytime",
        ],
        highlighted: true,
    },
];
