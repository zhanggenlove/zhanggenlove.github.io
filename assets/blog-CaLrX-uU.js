var e=[{slug:`hello-world`,date:`2026-03-20`,tags:[`announcement`],title:{en:`Hello World — 100Plans is Here`,zh:`Hello World — 100Plans 来了`,ja:`Hello World — 100Plans が始動します`},excerpt:{en:`A short introduction to the studio, the mission behind the work, and the eight apps that make up our lineup today.`,zh:`介绍工作室、创作使命，以及目前 lineup 中的八款应用。`,ja:`スタジオの紹介、ミッション、そして現在の8本のアプリについて。`},content:{en:`# Hello World — 100Plans is Here

Welcome to **100Plans**, a small independent studio building software that respects your time, your eyes, and your privacy. This site is our home on the web: a place to share what we ship, why we build it, and what we learn along the way.

Our mission is simple: **craft focused apps** that solve everyday problems without turning you into the product. We care about thoughtful defaults, native-feeling interfaces, and long-term maintainability over growth hacks.

Today the lineup spans **eight apps** across Mac, iOS, and the web—from tools that protect your health at the desk, to finance helpers that keep data on your device, to creative utilities that make your desktop feel alive. Each project starts from a real frustration we have felt ourselves, then grows through feedback from people who use the software every day.

100Plans is not chasing infinite scale. We are here to ship useful things, tell honest stories, and iterate in public when it helps. If that resonates, bookmark this blog: we will post announcements, deep dives, and lessons from the road.

Thank you for stopping by. The best is yet to come.`,zh:`# Hello World — 100Plans 来了

欢迎来到 **100Plans**：一个独立小团队，做尊重你时间、眼睛与隐私的软件。这个网站是我们在网上的家——分享我们发布什么、为什么做，以及一路走来的体会。

我们的目标很朴素：**做专注好用的应用**，解决日常问题，而不是把你当成产品去变现。我们更在意合理的默认设置、原生的交互质感，以及可持续的维护，而不是短期增长套路。

目前我们已有 **八款应用**，覆盖 Mac、iOS 与 Web——从保护久坐与视力的桌面健康工具，到把数据留在本地的理财助手，再到让桌面更有生命力的创意工具。每个项目都始于我们自己遇到的真实痛点，再在使用者的反馈里慢慢长大。

100Plans 不追求无限扩张。我们只想把有用的东西做出来，讲真实的故事，并在对大家有帮助时公开迭代过程。

若你也有同感，欢迎收藏这个博客：这里会有公告、技术向长文与路上的教训。

感谢你的到访。更好的还在后面。`,ja:`# Hello World — 100Plans が始動します

**100Plans** へようこそ。時間・目・プライバシーを大切にするソフトを作る、小さなインディースタジオです。このサイトは私たちのウェブ上の拠点であり、リリースするもの、作る理由、そして学びを共有する場所です。

ミッションはシンプルです。**目的に絞ったアプリ**を届け、ユーザーを「商品」にしない。思いやりのあるデフォルト、ネイティブに近い体験、そして短期的な伸びより長く続く保守性を重視します。

現在のラインアップは **8本のアプリ** で、Mac・iOS・Webにまたがります。デスクでの健康を守るツールから、データを端末に置いたままの家計支援、デスクトップを彩るクリエイティブ系まで。どのプロジェクトも、まず自分たちの不満から始まり、毎日使う人たちのフィードバックで育っていきます。

100Plans は無限スケールを追いません。役に立つものを届け、正直なストーリーを語り、役に立つなら公開で改善します。

共感してくれたら、このブログをブックマークしてください。お知らせ、深掘り記事、道のりでの学びを書いていきます。

訪れてくれてありがとうございます。これからが本番です。`}},{slug:`building-zzzappy`,date:`2026-03-15`,tags:[`development`,`zzzappy`],title:{en:`Building Zzzappy: Protecting Developer Health`,zh:`打造 Zzzappy：守护开发者的健康`,ja:`Zzzappy を作る：開発者の健康を守る`},excerpt:{en:`Why we built reminders around the 20-20-20 rule, how we approached RSI prevention, and the trade-offs behind a calm, native Mac experience.`,zh:`围绕 20-20-20 法则做提醒、RSI 预防的思路，以及在原生 Mac 体验上的取舍。`,ja:`20-20-20ルール、RSI予防、落ち着いたネイティブMac体験のトレードオフについて。`},content:{en:`# Building Zzzappy: Protecting Developer Health

If you write code for a living, your wrists and eyes pay a quiet tax every day. **Zzzappy** exists because we wanted that tax to be smaller—without turning your workflow into a nagging mess.

The **20-20-20 rule** is a simple ophthalmologist-backed habit: every twenty minutes, look at something twenty feet away for twenty seconds. It sounds trivial until you realize how rarely we actually do it during deep work. Zzzappy makes the cue gentle: unobtrusive reminders that respect focus time, with snooze when you are in the zone but should not forget your eyes entirely.

**RSI prevention** is the other half of the story. Break reminders are not just about guilt; they are about varying posture and micro-movements before pain becomes chronic. We optimized for low friction: quick actions from the menu bar, sensible defaults, and no analytics calling home.

Technically, we leaned on **native macOS patterns**—menu bar apps should feel like part of the system, not a web view in disguise. That meant careful attention to energy use, startup time, and accessibility. The hardest part was balancing "helpful" versus "annoying": too few reminders and people ignore the app; too many and they uninstall.

Zzzappy is a living project. If you rely on your hands and eyes to build things, we built it for you.`,zh:`# 打造 Zzzappy：守护开发者的健康

如果你靠写代码谋生，手腕和眼睛每天都在默默付「健康税」。**Zzzappy** 的存在，就是想让这笔税小一点——同时又不把你的工作流变成无休止的打扰。

**20-20-20 法则** 很简单：每 20 分钟，看向约 6 米外 20 秒。听起来容易，真正专注时却很难做到。Zzzappy 用温和的提示把这件事拉回日常：不打断心流太久，也支持延后，让你在「别吵我」和「别忘眼睛」之间找到平衡。

**RSI（重复性劳损）预防** 是另一半叙事。休息提醒不是为了制造愧疚，而是在疼痛变成慢性之前，提醒你换姿势、做微小活动。我们尽量降低摩擦：菜单栏里快速操作、合理的默认设置、以及不把分析数据发往云端。

在实现上，我们坚持 **原生 macOS 体验**——菜单栏应用应该像系统的一部分，而不是套壳网页。这意味着关注能耗、启动速度与可访问性。最难的是把握「有用」与「烦人」的边界：提醒太少会被忽略，太多又会被卸载。

Zzzappy 会持续迭代。如果你也靠双手和眼睛创造东西，它就是为你而写的。`,ja:`# Zzzappy を作る：開発者の健康を守る

コードを書いて生計を立てているなら、手首と目は静かにコストを払い続けます。**Zzzappy** は、その負担を少しでも軽くしたい——しかしワークフローをしつこいノイズにしないためにあります。

**20-20-20ルール** は眼科でも推奨される習慣で、20分ごとに約6メートル先を20秒見る、というシンプルなものです。集中していると実行は難しい。Zzzappy は穏やかな合図にこだわり、フォーカスを尊重しつつ、スヌーズで「今は無理」を許容します。

**RSI予防** もう半分の物語です。休憩は罪悪感のためではなく、痛みが慢性化する前に姿勢と微動を変えるため。メニューバーからの素早い操作、妥当なデフォルト、そしてアナリティクスを送り返さない設計を優先しました。

技術的には **ネイティブなmacOSの作法** に寄せました。メニューバーアプリはシステムの一部のように感じられるべきで、Webビューの偽物ではあってはならない。省エネ、起動時間、アクセシビリティに気を配りました。最も難しかったのは「役に立つ」と「うるさい」の境界でした。

Zzzappy は育つプロジェクトです。手と目でものを作る人のために、作っています。`}},{slug:`coin-focus-story`,date:`2026-03-10`,tags:[`development`,`coin-focus`],title:{en:`Why I Built Coin Focus from Scratch`,zh:`为什么我从零开始做了 Coin Focus`,ja:`Coin Focus を一から作った理由`},excerpt:{en:`A finance app born from distrust of bloated dashboards and cloud-first ledgers—and why SwiftUI was the right bet for a privacy-first wallet.`,zh:`源于对臃肿面板与「先上云」记账的不信任；以及为何用 SwiftUI 做隐私优先的钱包。`,ja:`肥大化したダッシュボードとクラウド優先の家計簿への違和感から。プライバシー第一の財布にSwiftUIが合った理由。`},content:{en:`# Why I Built Coin Focus from Scratch

Personal finance apps often ask for trust they have not earned: sync everything, sign up for another account, accept another privacy policy written for lawyers. **Coin Focus** started from the opposite instinct—**your numbers stay with you**, period.

Existing solutions were not bad at charts. They were bad at *boundaries*. Too many features compete for attention; too many flows assume you want the cloud as the source of truth. I wanted something calmer: fast entry, clear balances, and a UI that does not feel like a spreadsheet cosplaying as a product.

Building **from scratch in SwiftUI** let us align interaction with that philosophy. Native performance, offline-first mental model, and system integrations without a wrapper tax. The trade-off is velocity: SwiftUI has sharp edges, and finance UIs demand precision. We invested time in accessibility, dynamic type, and predictable navigation because money is stressful enough without the app fighting you.

Coin Focus is not trying to be the most powerful ledger on earth. It tries to be the one you trust when you open it late at night to answer a simple question: *where did this month go?*

If that sounds like your bar, we built it with you in mind.`,zh:`# 为什么我从零开始做了 Coin Focus

很多个人理财应用还没赢得信任，就先要求你：全量同步、再注册一个账号、再同意一份给律师写的隐私政策。**Coin Focus** 的起点相反——**数字尽量留在你这边**。

市面上的产品不是不会做图表，而是不擅长**边界感**。功能互相抢注意力，流程默认「云端即真理」。我想要更安静的东西：录入快、余额清楚、界面不像披着产品外衣的电子表格。

用 **SwiftUI 从零实现**，是为了让交互与这种哲学一致：原生性能、离线优先的心智模型、以及不必为套壳付税的系统整合。代价是节奏：SwiftUI 仍有锋利之处，而财务界面要求精确。我们在无障碍、动态字体与可预测的导航上花了时间——管钱已经够焦虑了，应用不该再添乱。

Coin Focus 不想成为地球上功能最全的账本。它只想成为你在深夜打开、想弄清「这个月钱去哪了」时，**愿意相信**的那一个。

若这正是你的标准，我们便是为你而做。`,ja:`# Coin Focus を一から作った理由

個人向け家計アプリは、まだ信頼を積み上げていないのに、同期やアカウント、長いプライバシーポリシーを求めがちです。**Coin Focus** の出発点は逆で、**数字はできるだけ手元に**という考え方です。

既存のソリューションはグラフが下手というより、*境界*が曖昧でした。機能が視線を奪い合い、クラウドを正とする前提のフローが多い。もっと静かなものが欲しかった：入力が速く、残高が明瞭で、スプレッドシートのコスプレのようなUIではないもの。

**SwiftUIで一から**作ることで、その哲学に沿った体験を狙いました。ネイティブの性能、オフライン優先の考え方、ラッパー代なしのシステム連携。代償は速度です。SwiftUIには難所があり、お金のUIは精度を要します。アクセシビリティ、ダイナミックタイプ、予測できるナビに時間をかけました。お金の不安はもう十分なのに、アプリが邪魔してはいけません。

Coin Focus は地球上で最強の台帳を目指していません。夜遅く開いて「今月どこに消えた？」と聞くとき、**信じられる**存在でありたい、という話です。

それがあなたの基準なら、そのために作りました。`}}].sort((e,t)=>e.date<t.date?1:e.date>t.date?-1:0);export{e as t};