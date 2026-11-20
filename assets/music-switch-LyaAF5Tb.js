var e={privacy:{en:`## Privacy Policy — Music Switch

**Last updated: March 20, 2026**

Gen Zhang ("we") built Music Switch as a free application. This Privacy Policy explains how we handle information, particularly regarding third-party music service integrations.

### 1. Information We Collect

**1.1 Music Service Account Access**
- **Apple Music**: Accessed via iOS MusicKit; we read your library and playlists with your permission. We do not access your Apple ID credentials.
- **YouTube Music**: Accessed via Google OAuth; you authenticate directly with Google. We receive a limited-scope access token, not your Google password.
- **NetEase Cloud Music / QQ Music**: Accessed via shared links you provide. We parse public playlist data from these links.

**1.2 Playlist & Song Data**
- Song metadata (title, artist, album, ISRC) is processed to match tracks across platforms
- This data is processed in-memory during the migration session and is not permanently stored on our servers after migration

**1.3 Backend Services**
- We use Supabase Edge Functions as proxy services for NetEase Cloud Music and QQ Music APIs
- These proxy services process playlist data in transit and do not permanently store your music data
- AI matching services (when rule-based matching fails) process song metadata to find matches

**1.4 Information We Do NOT Collect**
- We do not access your music files or downloaded content
- We do not collect device identifiers, location, or personal information beyond music service authentication

### 2. Data Sharing
- Song metadata is shared with target platform APIs solely to search for matching tracks and create playlists
- We do not sell, trade, or share your data for advertising or marketing purposes

### 3. Third-Party Services
- **Apple MusicKit**: Governed by Apple's privacy policy
- **Google OAuth / YouTube Data API**: Governed by Google's privacy policy
- **Supabase**: Backend infrastructure (governed by Supabase's privacy policy)
- **AI Matching Service**: Processes song metadata for matching only

### 4. Data Retention
- Migration session data (playlist contents, match results) is processed in real-time
- OAuth tokens are stored securely on your device and can be revoked at any time

### 5. Your Rights
- You can disconnect music service accounts at any time
- You can revoke Google OAuth access via your Google Account settings
- Uninstalling the app removes all locally stored data and tokens

### 6. Contact Us
- GitHub: [github.com/zhanggenlove](https://github.com/zhanggenlove)`,zh:`## 隐私政策 — Music Switch

**最后更新：2026年3月20日**

### 1. 我们收集的信息

**1.1 音乐服务账户访问**
- **Apple Music**：通过 iOS MusicKit 访问；经您授权后读取您的资料库和歌单。我们不访问您的 Apple ID 凭据。
- **YouTube Music**：通过 Google OAuth 访问；您直接与 Google 认证。我们接收有限范围的访问令牌，而非您的 Google 密码。
- **网易云音乐 / QQ 音乐**：通过您提供的分享链接访问。我们解析这些链接中的公开歌单数据。

**1.2 歌单与歌曲数据**
- 歌曲元数据（标题、艺术家、专辑、ISRC）用于在平台间匹配曲目
- 此数据在迁移会话期间在内存中处理，迁移完成后不会永久存储在我们的服务器上

**1.3 后端服务**
- 我们使用 Supabase Edge Functions 作为网易云音乐和 QQ 音乐 API 的代理服务
- 代理服务在传输过程中处理歌单数据，不永久存储您的音乐数据
- AI 匹配服务（当规则匹配失败时）处理歌曲元数据以寻找匹配

**1.4 我们不收集的信息**
- 我们不访问您的音乐文件或已下载内容
- 除音乐服务认证外，我们不收集设备标识符、位置或个人信息

### 2. 数据共享
- 歌曲元数据仅为在目标平台搜索匹配曲目和创建歌单而分享给目标平台 API
- 我们不为广告或营销目的出售或共享您的数据

### 3. 第三方服务
- **Apple MusicKit**：受 Apple 隐私政策管辖
- **Google OAuth / YouTube Data API**：受 Google 隐私政策管辖
- **Supabase**：后端基础设施
- **AI 匹配服务**：仅处理歌曲元数据用于匹配

### 4. 数据保留
- 迁移会话数据实时处理
- OAuth 令牌安全存储在您的设备上，可随时撤销

### 5. 您的权利
- 您可以随时断开音乐服务账户连接
- 您可以通过 Google 账户设置撤销 Google OAuth 访问
- 卸载应用将删除所有本地存储的数据和令牌

### 6. 联系我们
- GitHub: [github.com/zhanggenlove](https://github.com/zhanggenlove)`,ja:`## プライバシーポリシー — Music Switch

**最終更新：2026年3月20日**

### 1. 収集する情報
- **Apple Music**：iOS MusicKitを通じてアクセス。許可を得てライブラリとプレイリストを読み取ります
- **YouTube Music**：Google OAuthを通じてアクセス。限定スコープのアクセストークンを受信します
- **NetEase / QQ Music**：提供された共有リンクからプレイリストデータを解析します
- 楽曲メタデータ（タイトル、アーティスト、ISRC）は移行セッション中に処理され、永続的には保存されません

### 2. サードパーティサービス
Apple MusicKit、Google OAuth、Supabase、AIマッチングサービスを使用します。各サービスのプライバシーポリシーが適用されます。

### 3. お客様の権利
音楽サービスアカウントの接続解除、Google OAuthアクセスの取消、アプリのアンインストールがいつでも可能です。

### 4. お問い合わせ
- GitHub: [github.com/zhanggenlove](https://github.com/zhanggenlove)`},terms:{en:`## Terms of Service — Music Switch

**Last updated: March 20, 2026**

### 1. Acceptance of Terms
By using Music Switch ("App"), you agree to these Terms.

### 2. Description of Service
Music Switch is a free cross-platform playlist migration tool supporting Apple Music, YouTube Music, NetEase Cloud Music, and QQ Music. The App helps transfer playlists between these services.

### 3. Third-Party Music Services
- The App integrates with third-party music streaming services. Your use of these services is also governed by their respective terms of service and privacy policies.
- We are not affiliated with Apple Music, YouTube Music, NetEase Cloud Music, or QQ Music.
- We do not guarantee the availability, accuracy, or completeness of song matching across platforms.
- Music service APIs may change without notice, potentially affecting the App's functionality.

### 4. Song Matching
- The App uses ISRC codes, keyword matching, and AI-assisted matching to find songs across platforms.
- Match accuracy is not guaranteed. Songs may not be found on the target platform due to regional licensing, catalog differences, or metadata discrepancies.
- You are responsible for reviewing match results before confirming playlist creation.

### 5. User Responsibilities
- You must have valid accounts and appropriate permissions on the music services you use.
- You must comply with the terms of service of each music platform.
- You are responsible for any content you migrate and any resulting playlists created.

### 6. Intellectual Property
- The App does not copy, download, or transfer music files — it only creates playlists with references to existing tracks on the target platform.
- All music content rights belong to their respective rights holders.

### 7. Disclaimer of Warranties
THE APP IS PROVIDED "AS IS". WE DO NOT GUARANTEE: (A) 100% SONG MATCH ACCURACY; (B) COMPATIBILITY WITH ALL MUSIC SERVICE VERSIONS; (C) UNINTERRUPTED SERVICE AVAILABILITY.

### 8. Limitation of Liability
WE SHALL NOT BE LIABLE FOR: (A) INCOMPLETE OR INACCURATE PLAYLIST MIGRATIONS; (B) CHANGES TO THIRD-PARTY MUSIC SERVICE APIS; (C) LOSS OF PLAYLISTS OR MUSIC LIBRARY DATA; (D) ANY INDIRECT OR CONSEQUENTIAL DAMAGES.

### 9. Governing Law
These Terms shall be governed by the laws of the People's Republic of China.

### 10. Contact Us
- GitHub: [github.com/zhanggenlove](https://github.com/zhanggenlove)`,zh:`## 服务条款 — Music Switch

**最后更新：2026年3月20日**

### 1. 条款接受
使用 Music Switch（以下简称"本应用"）即表示您同意本条款。

### 2. 服务描述
Music Switch 是一款免费的跨平台歌单迁移工具，支持 Apple Music、YouTube Music、网易云音乐和 QQ 音乐。

### 3. 第三方音乐服务
- 本应用集成第三方音乐流媒体服务。您对这些服务的使用还受其各自的服务条款和隐私政策管辖。
- 我们与 Apple Music、YouTube Music、网易云音乐或 QQ 音乐没有关联关系。
- 我们不保证跨平台歌曲匹配的可用性、准确性或完整性。
- 音乐服务 API 可能在不通知的情况下发生变更，可能影响本应用的功能。

### 4. 歌曲匹配
- 本应用使用 ISRC 编码、关键词匹配和 AI 辅助匹配在平台间查找歌曲。
- 不保证匹配准确率。由于地区授权、曲库差异或元数据偏差，歌曲可能在目标平台上找不到。
- 您有责任在确认创建歌单前审查匹配结果。

### 5. 用户责任
- 您必须在所使用的音乐服务上拥有有效账户和适当权限。
- 您必须遵守各音乐平台的服务条款。

### 6. 知识产权
- 本应用不复制、下载或传输音乐文件——它仅在目标平台上创建包含现有曲目引用的歌单。
- 所有音乐内容版权归各自权利持有者所有。

### 7. 免责声明
本应用按"现状"提供。我们不保证：(A) 100% 的歌曲匹配准确率；(B) 与所有音乐服务版本的兼容性；(C) 不间断的服务可用性。

### 8. 责任限制
我们不对以下情况承担责任：(A) 不完整或不准确的歌单迁移；(B) 第三方音乐服务 API 的变更；(C) 歌单或音乐库数据丢失；(D) 任何间接或后果性损害。

### 9. 适用法律
本条款受中华人民共和国法律管辖。

### 10. 联系我们
- GitHub: [github.com/zhanggenlove](https://github.com/zhanggenlove)`,ja:`## 利用規約 — Music Switch

**最終更新：2026年3月20日**

### 1. 規約の承諾
Music Switch（以下「本アプリ」）を使用することにより、本規約に同意するものとします。

### 2. サービスの説明
Music Switchは、Apple Music、YouTube Music、NetEase、QQ Musicに対応する無料のクロスプラットフォームプレイリスト移行ツールです。

### 3. 楽曲マッチング
ISRC、キーワード、AIマッチングを使用します。100%の精度は保証しません。マッチ結果はお客様の責任で確認してください。

### 4. 知的財産権
本アプリは音楽ファイルのコピー・ダウンロード・転送を行いません。ターゲットプラットフォーム上の既存トラックへの参照を含むプレイリストを作成するのみです。

### 5. 保証の否認
本アプリは「現状のまま」提供されます。

### 6. 準拠法
本規約は中華人民共和国の法律に準拠します。

### 7. お問い合わせ
- GitHub: [github.com/zhanggenlove](https://github.com/zhanggenlove)`}};export{e as musicSwitchPolicy};