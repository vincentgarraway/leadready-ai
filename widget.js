{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // LeadReady Site AI \'b7 Absolute Intelligence\'99\
// USPTO #63/502,991 \'b7 FEDERAL TRADE SECRET \'b7 18 U.S.C. \'a71832\
\
(function() \{\
    // Disable right-click\
    document.addEventListener('contextmenu', function(e) \{\
        e.preventDefault();\
        return false;\
    \});\
\
    // Your brand colors\
    const COLORS = \{\
        amber: '#f59e0b',\
        navy: '#0f172a',\
        green: '#10b981',\
        charcoal: '#334155',\
        white: '#ffffff',\
        black: '#000000'\
    \};\
\
    // DeepSeek API (you'll add your key)\
    const DEEPSEEK_API_KEY = 'YOUR_DEEPSEEK_API_KEY_HERE';\
    const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';\
\
    // Widget HTML\
    const widgetHTML = `\
        <div id="leadready-ai-widget" style="position:fixed; bottom:20px; right:20px; width:380px; max-width:90vw; z-index:999999; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; display:none;">\
            <div style="background:$\{COLORS.white\}; border:2px solid $\{COLORS.amber\}; border-radius:16px; box-shadow:0 20px 25px -5px rgba(0,0,0,0.2); overflow:hidden;">\
                <div style="background:$\{COLORS.amber\}; padding:16px 20px; display:flex; align-items:center; gap:8px; cursor:pointer;" id="leadready-header">\
                    <div style="width:8px; height:8px; background:$\{COLORS.green\}; border-radius:50%; animation:pulse 2s infinite;"></div>\
                    <div style="font-weight:600; font-size:1rem; color:$\{COLORS.black\};">\uc0\u55357 \u56631  LeadReady Site AI \'b7 Absolute Intelligence\'99</div>\
                </div>\
                <div id="leadready-messages" style="height:350px; overflow-y:auto; padding:16px; background:$\{COLORS.white\};">\
                    <div style="background:#f8fafc; border-left:4px solid $\{COLORS.amber\}; padding:12px; margin-bottom:12px; border-radius:0 12px 12px 12px; color:$\{COLORS.black\};">\
                        Hi! I'm your LeadReady AI assistant. How can I help you today?\
                    </div>\
                </div>\
                <div style="display:flex; padding:12px 16px; border-top:1px solid #e2e8f0; background:$\{COLORS.white\};">\
                    <input type="text" id="leadready-input" placeholder="Type your message..." style="flex:1; padding:12px 16px; border:2px solid #e2e8f0; border-radius:40px; font-size:0.95rem; color:$\{COLORS.black\}; background:$\{COLORS.white\}; outline:none;">\
                    <button id="leadready-send" style="background:$\{COLORS.green\}; color:$\{COLORS.white\}; border:none; border-radius:40px; width:48px; height:48px; margin-left:8px; font-size:1.2rem; cursor:pointer;">\uc0\u9679 </button>\
                </div>\
                <div style="background:#f8fafc; padding:12px 16px; border-top:1px solid #e2e8f0; font-size:0.7rem; color:$\{COLORS.charcoal\}; text-align:center;">\
                    <div>LeadReady Site AI\'ae \'b7 USPTO #63/502,991</div>\
                    <div style="color:#64748b; font-size:0.65rem;">FEDERAL TRADE SECRET \'b7 18 U.S.C. \'a71832</div>\
                </div>\
            </div>\
            <div id="leadready-collapsed" style="background:$\{COLORS.amber\}; border-radius:60px; padding:12px 24px; box-shadow:0 10px 15px -3px rgba(0,0,0,0.2); display:flex; align-items:center; gap:8px; cursor:pointer;">\
                <div style="width:8px; height:8px; background:$\{COLORS.green\}; border-radius:50%; animation:pulse 2s infinite;"></div>\
                <span style="color:$\{COLORS.black\};">LeadReady Site AI</span>\
            </div>\
        </div>\
        <style>@keyframes pulse\{0%\{opacity:1\}50%\{opacity:0.5\}100%\{opacity:1\}\}</style>\
    `;\
\
    // Inject widget\
    document.body.insertAdjacentHTML('beforeend', widgetHTML);\
\
    // Basic toggle functionality\
    const widget = document.getElementById('leadready-ai-widget');\
    const collapsed = document.getElementById('leadready-collapsed');\
    const header = document.getElementById('leadready-header');\
\
    collapsed.onclick = function() \{\
        collapsed.style.display = 'none';\
        widget.style.display = 'block';\
    \};\
\
    header.onclick = function() \{\
        widget.style.display = 'none';\
        collapsed.style.display = 'flex';\
    \};\
\
    // Placeholder for AI response\
    window.sendMessage = function() \{\
        const input = document.getElementById('leadready-input');\
        const msg = input.value;\
        if (!msg) return;\
        \
        const messages = document.getElementById('leadready-messages');\
        messages.innerHTML += `<div style="background:$\{COLORS.navy\}; color:white; padding:12px; margin:8px 0; border-radius:12px 12px 0 12px; text-align:right;">$\{msg\}</div>`;\
        messages.innerHTML += `<div style="background:#f8fafc; border-left:4px solid $\{COLORS.amber\}; padding:12px; margin:8px 0; border-radius:0 12px 12px 12px; color:black;">Thanks for your message. A human will respond shortly.</div>`;\
        input.value = '';\
    \};\
\
    document.getElementById('leadready-send').onclick = window.sendMessage;\
    document.getElementById('leadready-input').onkeypress = function(e) \{\
        if (e.key === 'Enter') window.sendMessage();\
    \};\
\})();}