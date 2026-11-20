var e={privacy:{en:`## Privacy Policy — Sakurago (桜語)

**Last updated: March 20, 2026**

Gen Zhang ("we") built Sakurago as a free web application for Japanese language learning. This Privacy Policy explains how we handle your information.

### 1. Information We Collect

**1.1 Account Information**
- Email address (for account creation and login)
- OAuth profile data if you sign in with Google or GitHub (name, email, profile picture)
- We use Supabase Authentication to manage accounts securely

**1.2 Learning Data**
- Vocabulary entries you add (words, readings, meanings, examples)
- Review history and FSRS scheduling data (review dates, difficulty ratings, memory strength)
- Notes you create (Markdown content)
- Gamification data (XP, level, achievements, streaks)
- JLPT coverage statistics

**1.3 AI-Generated Content**
- When you use the AI fill feature, word metadata is sent to OpenAI's API for processing
- This includes the word itself and request for readings, meanings, examples, synonyms, and antonyms
- We do not send your personal information or learning history to OpenAI

**1.4 Text-to-Speech**
- When using TTS for pronunciation, text is sent to Google Translate's TTS service
- Only the individual word or sentence being spoken is transmitted

### 2. How We Use Information
- To provide vocabulary management, spaced repetition review, and progress tracking
- To calculate FSRS scheduling for optimal review timing
- To generate AI-assisted word information when you request it
- To maintain your learning streaks, XP, and achievement progress

### 3. Data Storage & Security
- All user data is stored in Supabase (PostgreSQL) with Row Level Security (RLS) enabled
- RLS ensures that each user can only access their own data
- Data is encrypted in transit (HTTPS/TLS) and at rest
- Authentication tokens are managed securely by Supabase

### 4. Third-Party Services
- **Supabase**: Database, authentication, and edge functions (governed by Supabase's privacy policy)
- **OpenAI API**: AI-powered word analysis (governed by OpenAI's privacy policy; data sent is limited to word metadata)
- **Google TTS**: Text-to-speech pronunciation (governed by Google's privacy policy)
- **Vercel**: Web hosting and CDN (governed by Vercel's privacy policy)
- No advertising or behavioral tracking services are used

### 5. Data Sharing
- We do not sell, rent, or share your personal data or learning data with third parties for marketing purposes
- Data is shared with the third-party services listed above solely to provide the App's functionality

### 6. Your Rights
- **Access**: View all your data within the App
- **Deletion**: You may request account and data deletion by contacting us
- **Export**: Your vocabulary and notes data can be exported from the App
- **Modification**: You can edit or delete any vocabulary entries, notes, or settings at any time

### 7. Cookies & Local Storage
- The web app uses browser local storage and cookies for authentication tokens and user preferences
- No third-party tracking cookies are used

### 8. Children's Privacy
This app is not intended for children under 13. We do not knowingly collect information from children.

### 9. Changes to This Policy
Changes will be posted on this page. Continued use constitutes acceptance.

### 10. Contact Us
- GitHub: [github.com/zhanggenlove](https://github.com/zhanggenlove)`,zh:`## 隐私政策 — 桜語

**最后更新：2026年3月20日**

zhanggen（以下简称"我们"）开发了桜語，这是一款免费的日语学习 Web 应用。

### 1. 我们收集的信息

**1.1 账户信息**
- 电子邮件地址（用于账户创建和登录）
- 如果您使用 Google 或 GitHub 登录的 OAuth 配置文件数据（姓名、邮箱、头像）
- 我们使用 Supabase Authentication 安全管理账户

**1.2 学习数据**
- 您添加的词汇条目（单词、读音、释义、例句）
- 复习历史和 FSRS 调度数据（复习日期、难度评分、记忆强度）
- 您创建的笔记（Markdown 内容）
- 游戏化数据（XP、等级、成就、连续学习天数）
- JLPT 覆盖率统计

**1.3 AI 生成内容**
- 使用 AI 填充功能时，单词元数据会发送到 OpenAI 的 API 进行处理
- 仅包括单词本身及读音、释义、例句、近义词、反义词的请求
- 我们不会将您的个人信息或学习历史发送给 OpenAI

**1.4 文本转语音**
- 使用 TTS 发音时，文本会发送到 Google Translate 的 TTS 服务
- 仅传输正在朗读的单个单词或句子

### 2. 信息使用方式
- 提供词汇管理、间隔重复复习和进度追踪
- 计算 FSRS 调度以确定最佳复习时间
- 在您请求时生成 AI 辅助的单词信息

### 3. 数据存储与安全
- 所有用户数据存储在 Supabase（PostgreSQL）中，启用了行级安全 (RLS)
- RLS 确保每个用户只能访问自己的数据
- 数据在传输中 (HTTPS/TLS) 和存储时均加密

### 4. 第三方服务
- **Supabase**：数据库、认证和边缘函数
- **OpenAI API**：AI 驱动的单词分析（发送的数据仅限单词元数据）
- **Google TTS**：文本转语音发音
- **Vercel**：Web 托管和 CDN
- 未使用广告或行为追踪服务

### 5. 数据共享
我们不会为营销目的向第三方出售、出租或共享您的个人数据或学习数据。

### 6. 您的权利
- **访问权**：在应用内查看所有数据
- **删除权**：联系我们请求账户和数据删除
- **导出权**：可从应用导出词汇和笔记数据
- **修改权**：可随时编辑或删除任何词汇条目、笔记或设置

### 7. Cookies 与本地存储
- Web 应用使用浏览器本地存储和 cookies 存储认证令牌和用户偏好
- 不使用第三方追踪 cookies

### 8. 政策变更
变更将在本页面发布。继续使用即表示接受。

### 9. 联系我们
- GitHub: [github.com/zhanggenlove](https://github.com/zhanggenlove)`,ja:`## プライバシーポリシー — 桜語

**最終更新：2026年3月20日**

### 1. 収集する情報
- **アカウント情報**：メールアドレス、Google/GitHub OAuthプロフィールデータ
- **学習データ**：語彙エントリ、レビュー履歴、FSRSスケジューリングデータ、ノート、ゲーミフィケーションデータ
- **AI生成コンテンツ**：AI入力機能使用時、単語メタデータがOpenAI APIに送信されます
- **TTS**：発音再生時、テキストがGoogle TTSに送信されます

### 2. データの保存とセキュリティ
- すべてのデータはSupabase（PostgreSQL）に保存、行レベルセキュリティ（RLS）有効
- HTTPS/TLS暗号化による転送時保護

### 3. サードパーティサービス
Supabase、OpenAI API、Google TTS、Vercelを使用。広告やトラッキングサービスは使用していません。

### 4. お客様の権利
アプリ内でのデータ閲覧、アカウント削除の要求、データエクスポートが可能です。

### 5. お問い合わせ
- GitHub: [github.com/zhanggenlove](https://github.com/zhanggenlove)`},terms:{en:`## Terms of Service — Sakurago (桜語)

**Last updated: March 20, 2026**

### 1. Acceptance of Terms
By creating an account or using Sakurago ("App"), you agree to these Terms.

### 2. Description of Service
Sakurago is a free web-based Japanese vocabulary learning tool featuring FSRS v4.5 spaced repetition, AI-assisted word analysis, gamification, and JLPT-aligned study materials.

### 3. User Accounts
- You must provide a valid email address to create an account
- You are responsible for maintaining the security of your account credentials
- You must not share your account or create multiple accounts
- We reserve the right to suspend accounts that violate these Terms

### 4. Free Service
- Sakurago is currently offered as a completely free service
- We reserve the right to introduce paid features in the future, with advance notice to existing users
- No credit card is required to use the service

### 5. AI-Generated Content
- AI features are powered by OpenAI and provide word readings, meanings, examples, synonyms, and antonyms
- AI-generated content may contain errors or inaccuracies
- You should verify AI-generated content before relying on it for exams or formal study
- We are not responsible for the accuracy of AI outputs

### 6. User Content
- You retain ownership of vocabulary lists and notes you create
- By using the service, you grant us a limited license to store and process your content to provide the service
- You must not upload harmful, illegal, or infringing content

### 7. JLPT Materials
- JLPT-related content is provided for educational purposes
- We are not affiliated with or endorsed by the Japan Foundation or JEES (organizers of the JLPT)
- JLPT level classifications are approximate and should be verified with official sources

### 8. Service Availability
- We strive for high uptime but do not guarantee 100% availability
- The service may be interrupted for maintenance, updates, or unforeseen issues
- We are not liable for data loss due to service outages

### 9. Disclaimer of Warranties
THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT GUARANTEE: (A) ACCURACY OF FSRS SCHEDULING PREDICTIONS; (B) ACCURACY OF AI-GENERATED CONTENT; (C) CONTINUOUS, UNINTERRUPTED SERVICE.

### 10. Limitation of Liability
WE SHALL NOT BE LIABLE FOR: (A) EXAM RESULTS BASED ON APP STUDY; (B) DATA LOSS; (C) SERVICE INTERRUPTIONS; (D) ANY INDIRECT OR CONSEQUENTIAL DAMAGES.

### 11. Governing Law
These Terms shall be governed by the laws of the People's Republic of China.

### 12. Contact Us
- GitHub: [github.com/zhanggenlove](https://github.com/zhanggenlove)`,zh:`## 服务条款 — 桜語

**最后更新：2026年3月20日**

### 1. 条款接受
创建账户或使用桜語（以下简称"本应用"）即表示您同意本条款。

### 2. 服务描述
桜語是一款免费的基于 Web 的日语词汇学习工具，提供 FSRS v4.5 间隔重复、AI 辅助单词分析、游戏化和 JLPT 对齐的学习材料。

### 3. 用户账户
- 您必须提供有效的电子邮件地址来创建账户
- 您有责任维护账户凭据的安全
- 您不得共享账户或创建多个账户

### 4. 免费服务
- 桜語目前作为完全免费的服务提供
- 我们保留在未来引入付费功能的权利，届时会提前通知现有用户
- 使用本服务不需要信用卡

### 5. AI 生成内容
- AI 功能由 OpenAI 驱动，提供单词读音、释义、例句、近义词和反义词
- AI 生成的内容可能包含错误或不准确之处
- 在依赖 AI 生成内容进行考试或正式学习之前，您应进行验证
- 我们不对 AI 输出的准确性负责

### 6. 用户内容
- 您保留对创建的词汇表和笔记的所有权
- 使用本服务即表示您授予我们有限的许可来存储和处理您的内容以提供服务

### 7. JLPT 材料
- JLPT 相关内容仅供教育目的
- 我们与日本国际交流基金会或 JEES 无关联
- JLPT 级别分类为近似值，应以官方来源为准

### 8. 免责声明
本服务按"现状"提供，不提供任何形式的保证。

### 9. 责任限制
我们不对以下情况承担责任：(A) 基于应用学习的考试结果；(B) 数据丢失；(C) 服务中断；(D) 任何间接或后果性损害。

### 10. 适用法律
本条款受中华人民共和国法律管辖。

### 11. 联系我们
- GitHub: [github.com/zhanggenlove](https://github.com/zhanggenlove)`,ja:`## 利用規約 — 桜語

**最終更新：2026年3月20日**

### 1. 規約の承諾
アカウントを作成または桜語を使用することにより、本規約に同意するものとします。

### 2. サービスの説明
桜語は、FSRS v4.5間隔反復、AIアシスト単語分析、ゲーミフィケーション、JLPT対応学習教材を備えた無料のウェブベース日本語語彙学習ツールです。

### 3. 無料サービス
桜語は現在完全無料で提供されています。将来、有料機能を導入する権利を留保しますが、既存ユーザーには事前に通知します。

### 4. AI生成コンテンツ
AI生成コンテンツには誤りが含まれる場合があります。試験や正式な学習に依存する前に確認してください。

### 5. JLPT教材
JLPT関連コンテンツは教育目的のみです。日本国際交流基金会やJEESとは関連ありません。

### 6. 保証の否認
本サービスは「現状のまま」提供されます。FSRS予測やAI生成コンテンツの正確性は保証しません。

### 7. 準拠法
本規約は中華人民共和国の法律に準拠します。

### 8. お問い合わせ
- GitHub: [github.com/zhanggenlove](https://github.com/zhanggenlove)`}};export{e as sakuragoPolicy};