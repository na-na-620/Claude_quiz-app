// ============================================================
// 問題バンク：クイズで使う全問題データをまとめた配列
// 各問題は question（問題文）・choices（選択肢）・
// answer（正解のインデックス番号、0始まり）・explanation（解説）で構成
// ============================================================
const questionBank = [
  {
    question: "世界で最も面積が大きい大洋はどれ？",
    choices: ["大西洋", "インド洋", "太平洋", "北極海"],
    answer: 2,
    explanation: "太平洋は世界最大の大洋で、地球の表面積の約3分の1を占めます。面積は約1億6,525万km²です。"
  },
  {
    question: "成人の人体に含まれる骨の数は約何本？",
    choices: ["約106本", "約206本", "約306本", "約406本"],
    answer: 1,
    explanation: "成人の骨の数は約206本です。赤ちゃんのときは約300本ありますが、成長とともに骨が癒合して減っていきます。"
  },
  {
    question: "「モナ・リザ」を描いた芸術家は誰？",
    choices: ["ミケランジェロ", "ラファエロ", "ボッティチェリ", "レオナルド・ダ・ヴィンチ"],
    answer: 3,
    explanation: "モナ・リザはイタリア・ルネサンス期の芸術家レオナルド・ダ・ヴィンチが描いた作品です。現在はパリのルーヴル美術館に所蔵されています。"
  },
  {
    question: "光が真空中を1秒間に進む距離は約何万km？",
    choices: ["約3万km", "約30万km", "約300万km", "約3,000万km"],
    answer: 1,
    explanation: "光の速さは真空中で秒速約30万km（正確には約29万9,792km）です。これは物理学における速度の上限とされています。"
  },
  {
    question: "日本の国花として広く知られている花はどれ？",
    choices: ["梅", "菊", "桜", "蓮"],
    answer: 2,
    explanation: "桜（ソメイヨシノなど）は日本の国花として広く親しまれています。なお、菊は皇室の紋章として使われており、両方とも国花と言われることがあります。"
  },
  {
    question: "地球の表面積のうち、海が占める割合は約どのくらい？",
    choices: ["約5割", "約6割", "約7割", "約8割"],
    answer: 2,
    explanation: "地球の表面積の約71%（約7割）を海が占めています。そのため地球は「水の惑星」とも呼ばれます。"
  },
  {
    question: "人体で最も大きい器官はどれ？",
    choices: ["肝臓", "肺", "皮膚", "小腸"],
    answer: 2,
    explanation: "皮膚は人体最大の器官で、成人では面積約1.6〜1.8m²、重さ約3〜4kgあります。体を外部の刺激や病原体から守る役割を担っています。"
  },
  {
    question: "ダイヤモンドの主成分は何？",
    choices: ["ケイ素", "鉄", "炭素", "アルミニウム"],
    answer: 2,
    explanation: "ダイヤモンドは炭素（C）原子だけが規則正しく結合した物質です。炭素が別の形で結合するとグラファイト（鉛筆の芯）になります。"
  },
  {
    question: "月が地球を一周するのにかかる期間は約何日？",
    choices: ["約14日", "約27日", "約30日", "約60日"],
    answer: 1,
    explanation: "月の公転周期は約27.3日です。月の満ち欠けの周期（約29.5日）とは異なります。これは地球も太陽の周りを公転しているためです。"
  },
  {
    question: "世界最高峰エベレストがある山脈はどれ？",
    choices: ["アルプス山脈", "アンデス山脈", "ロッキー山脈", "ヒマラヤ山脈"],
    answer: 3,
    explanation: "エベレスト（標高8,849m）はヒマラヤ山脈に属し、ネパールと中国の国境に位置しています。1953年にヒラリーとテンジンが初登頂しました。"
  },
  {
    question: "日本の都道府県の数は？",
    choices: ["43", "45", "47", "49"],
    answer: 2,
    explanation: "日本には1都（東京）・1道（北海道）・2府（大阪・京都）・43県の計47都道府県があります。"
  },
  {
    question: "日本で最も長い川はどれ？",
    choices: ["利根川", "信濃川", "北上川", "吉野川"],
    answer: 1,
    explanation: "信濃川は全長約367kmで日本最長の川です。長野県から新潟県を経て日本海に注ぎます。長野県内では千曲川と呼ばれています。"
  },
  {
    question: "「走れメロス」の作者は誰？",
    choices: ["芥川龍之介", "川端康成", "三島由紀夫", "太宰治"],
    answer: 3,
    explanation: "「走れメロス」は太宰治が1940年に発表した短編小説です。友情と信頼をテーマに描かれた代表作のひとつです。"
  },
  {
    question: "「吾輩は猫である」の作者は誰？",
    choices: ["森鴎外", "夏目漱石", "樋口一葉", "島崎藤村"],
    answer: 1,
    explanation: "「吾輩は猫である」は夏目漱石が1905〜1906年に発表した長編小説です。猫の視点から人間社会を風刺的に描いた作品です。"
  },
  {
    question: "「源氏物語」の作者は誰？",
    choices: ["清少納言", "和泉式部", "紫式部", "小野小町"],
    answer: 2,
    explanation: "「源氏物語」は平安時代中期に紫式部が書いた世界最古の長編小説のひとつです。光源氏を主人公に宮廷生活を描いています。"
  },
  {
    question: "日本で最も広い湖はどれ？",
    choices: ["浜名湖", "諏訪湖", "霞ヶ浦", "琵琶湖"],
    answer: 3,
    explanation: "琵琶湖は滋賀県に位置し、面積約670km²で日本最大の湖です。日本の湖沼の中で唯一、固有種の魚が数多く生息しています。"
  },
  {
    question: "元素記号「Au」が表す元素は何？",
    choices: ["銀", "金", "銅", "鉄"],
    answer: 1,
    explanation: "Auはラテン語の「Aurum（黄金）」に由来する金（Gold）の元素記号です。原子番号は79で、古来より装飾品や通貨として使われてきました。"
  },
  {
    question: "近代オリンピックが初めて開催された国はどこ？",
    choices: ["フランス", "イギリス", "ギリシャ", "アメリカ"],
    answer: 2,
    explanation: "近代オリンピックは1896年にギリシャのアテネで初めて開催されました。古代オリンピックの発祥地であるギリシャで復活したものです。"
  },
  {
    question: "太陽系で最も大きい惑星はどれ？",
    choices: ["土星", "天王星", "海王星", "木星"],
    answer: 3,
    explanation: "木星は太陽系最大の惑星で、直径は地球の約11倍、質量は地球の約318倍あります。大赤斑と呼ばれる巨大な嵐が有名です。"
  },
  {
    question: "血液が体内を一巡（体循環）するのにかかる時間は約どのくらい？",
    choices: ["約10秒", "約1分", "約10分", "約1時間"],
    answer: 1,
    explanation: "安静時、血液が体内を一巡するのにかかる時間は約1分です。心臓は1分間に約60〜80回拍動し、全身に血液を送り続けています。"
  }
];

// ============================================================
// 定数：変わらない値をまとめて定義
// const ・一度セットしたら変えられない変数（=定数）を定義する（再宣言・再代入が不可）
//       ・基本はconstで変数宣言することで、意図しない値の書き換えを防ぐ
// ============================================================

// 1回のクイズで出題する問題数
const QUIZ_COUNT = 5;

// 選択肢ボタンに表示するラベル（A〜D）
const LABELS = ["A", "B", "C", "D"];

// ============================================================
// 変数：クイズの進行中に変化する状態を管理
// let ・あとから値を変えられる変数を定義する（再宣言不可・再代入可なブロックスコープ）
//     ・繰り返し構文で使用する
// ============================================================

// 今回のクイズで選ばれた5問を格納する配列（最初は空）
let selectedQuestions = [];

// 現在表示している問題の番号（0から始まるインデックス）
let currentIndex = 0;

// 正解した問題数
let score = 0;

// ============================================================
// DOM取得：HTMLの各要素をJavaScriptから操作できるよう取得
// ============================================================

// 各「画面」要素（スタート・クイズ・結果）
const startScreen    = document.getElementById("start-screen");
const quizScreen     = document.getElementById("quiz-screen");
const resultScreen   = document.getElementById("result-screen");

// 進捗表示エリアの要素（「問題 2 / 5」のテキストとプログレスバーの塗り部分）
const questionNumber = document.getElementById("question-number");
const progressFill   = document.getElementById("progress-fill");

// 問題文・選択肢・フィードバック関連の要素
const questionText   = document.getElementById("question-text");
const choicesEl      = document.getElementById("choices");
const feedbackEl     = document.getElementById("feedback");
const feedbackText   = document.getElementById("feedback-text");
const explanationText = document.getElementById("explanation-text");

// 「次の問題へ」ボタン
const nextBtn        = document.getElementById("next-btn");

// 結果画面の要素（スコア数値・メッセージ・アイコン）
const scoreEl        = document.getElementById("score");
const scoreMsgEl     = document.getElementById("score-message");
const resultIcon     = document.getElementById("result-icon");

// ============================================================
// 関数定義
// function 関数名(引数){処理} で関数を表す
// ============================================================

// 問題をランダムに QUIZ_COUNT 問選ぶ関数
// [...questionBank] で元の配列をコピーしてから並び替え、
// Math.random() - 0.5 を使うと正・負がランダムになり順序がシャッフルされる
function pickQuestions() {
  return [...questionBank]
    .sort(() => Math.random() - 0.5)
    .slice(0, QUIZ_COUNT); // 先頭から QUIZ_COUNT 問だけ取り出す
}

// 指定した画面だけを表示し、他の画面を非表示にする関数
// forEach で全画面に "hidden" クラスを付けてから、
// 表示したい画面の "hidden" だけ取り除く
function showScreen(screen) {
  [startScreen, quizScreen, resultScreen].forEach(s => s.classList.add("hidden"));
  screen.classList.remove("hidden");
}

// クイズを最初からスタートする関数
function startQuiz() {
  currentIndex = 0;        // 問題番号をリセット
  score = 0;               // スコアをリセット
  selectedQuestions = pickQuestions(); // 問題をランダムに選出
  showScreen(quizScreen);  // クイズ画面を表示
  showQuestion();          // 最初の問題を描画
}

// 現在の問題を画面に描画する関数
function showQuestion() {
  const q = selectedQuestions[currentIndex]; // 現在の問題オブジェクトを取得
  const total = selectedQuestions.length;    // 総問題数

  // 「問題 X / 5」のテキストを更新（currentIndex は 0 始まりなので +1 する）
  questionNumber.textContent = `問題 ${currentIndex + 1} / ${total}`;

  // プログレスバーの幅を進捗に応じてパーセントで更新
  progressFill.style.width = `${(currentIndex / total) * 100}%`;

  // 問題文をセット
  questionText.textContent = q.question;

  // 前の問題のフィードバックを非表示にする
  feedbackEl.classList.add("hidden");

  // 選択肢ボタンを作り直す（前の問題のボタンを削除してから生成）
  choicesEl.innerHTML = "";
  q.choices.forEach((choice, i) => {
    const btn = document.createElement("button"); // <button> 要素を新規作成
    btn.className = "choice-btn";
    // ラベル（A/B/C/D）と選択肢テキストを組み合わせてボタンの中身を設定
    btn.innerHTML = `<span class="label">${LABELS[i]}</span>${choice}`;
    // ボタンをクリックしたら selectAnswer に選択肢番号を渡す
    btn.addEventListener("click", () => selectAnswer(i));
    choicesEl.appendChild(btn); // 選択肢エリアにボタンを追加
  });

  // 最後の問題かどうかでボタンのテキストを切り替える
  const isLast = currentIndex === total - 1;
  nextBtn.textContent = isLast ? "結果を見る" : "次の問題へ";
}

// ユーザーが選択肢を選んだときに呼ばれる関数
// selectedIndex：ユーザーが選んだ選択肢の番号（0〜3）
function selectAnswer(selectedIndex) {
  const q = selectedQuestions[currentIndex];               // 現在の問題
  const buttons = choicesEl.querySelectorAll(".choice-btn"); // 全選択肢ボタン
  const isCorrect = selectedIndex === q.answer;            // 正解かどうか

  // 正解なら得点を +1
  if (isCorrect) score++;

  // 全ボタンを無効化し、正解・不正解の色付けを行う
  buttons.forEach((btn, i) => {
    btn.disabled = true; // これ以上クリックできないようにする
    if (i === q.answer) {
      btn.classList.add("correct"); // 正解の選択肢を緑色に
    } else if (i === selectedIndex && !isCorrect) {
      btn.classList.add("wrong");   // 不正解で選んだ選択肢を赤色に
    }
  });

  // フィードバックテキストを正解・不正解に応じてセット
  feedbackText.textContent = isCorrect ? "✓ 正解！" : "✗ 不正解…";
  // CSSクラスで文字色を切り替える（is-correct: 緑 / is-wrong: 赤）
  feedbackText.className = "feedback-text " + (isCorrect ? "is-correct" : "is-wrong");

  // 解説文をセット
  explanationText.textContent = q.explanation;

  // フィードバックエリアを表示する
  feedbackEl.classList.remove("hidden");
}

// 「次の問題へ」ボタンが押されたときに呼ばれる関数
function nextQuestion() {
  currentIndex++; // 問題番号を次に進める
  if (currentIndex < selectedQuestions.length) {
    showQuestion(); // まだ問題が残っていれば次の問題を表示
  } else {
    showResult();   // 全問終了なら結果画面へ
  }
}

// 結果画面を表示する関数
function showResult() {
  progressFill.style.width = "100%"; // プログレスバーを100%に
  showScreen(resultScreen);          // 結果画面を表示

  // スコア数値を画面にセット
  scoreEl.textContent = score;

  // 正解率（0〜1の小数）を計算してメッセージとアイコンを決定
  const ratio = score / selectedQuestions.length;
  let icon, message;

  if (ratio === 1) {
    icon = "🏆";
    message = "全問正解！素晴らしい知識です！";
  } else if (ratio >= 0.6) {
    icon = "👏";
    message = "よく頑張りました！もう少しで満点です！";
  } else if (ratio >= 0.4) {
    icon = "💪";
    message = "もう一息！復習してもう一度挑戦してみよう！";
  } else {
    icon = "📖";
    message = "勉強してリベンジしよう！";
  }

  // アイコンと結果メッセージを画面にセット
  resultIcon.textContent = icon;
  scoreMsgEl.textContent = `${selectedQuestions.length}問中${score}問正解 — ${message}`;
}

// ============================================================
// イベントリスナー：ボタンと関数を紐付け
// ============================================================

// 「スタート」ボタンを押したら startQuiz を実行
document.getElementById("start-btn").addEventListener("click", startQuiz);

// 「次の問題へ」ボタンを押したら nextQuestion を実行
nextBtn.addEventListener("click", nextQuestion);

// 「もう一度挑戦する」ボタンを押したら startQuiz を実行（最初からやり直し）
document.getElementById("retry-btn").addEventListener("click", startQuiz);
