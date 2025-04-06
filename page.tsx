import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";

export default function AccountSalesPage() {
  const [showDetails, setShowDetails] = useState(false);
  const [language, setLanguage] = useState("zh"); // zh = 中文, ko = 韩文

  const handlePurchase = () => {
    setShowDetails(true);
  };

  const toggleLanguage = () => {
    setLanguage(language === "zh" ? "ko" : "zh");
  };

  const text = {
    zh: {
      title: "账号合租服务中心",
      youtube: "YouTube Premium 合租",
      youtubeDesc: "6个月 ₩29,000｜12+1个月 ₩46,000｜24+2个月 ₩79,000",
      netflix: "Netflix 合租账号",
      netflixDesc: "每月 ₩8,000｜支持多设备同时观看",
      gpt: "GPT Plus 账号",
      gptDesc: "按月 ₩7,500｜按年 ₩88,000｜自动续费",
      buyNow: "立即购买",
      instructions: "购买说明",
      details: [
        "支付后页面将自动显示账号信息与使用说明。",
        "支持 Toss / PayPal / 微信 收款。",
        "售后联系：",
        "请务必截图保存账号与有效期页面。",
        "每个账号仅限个人使用，禁止分享第三方。",
        "所有账号自动续费，请在到期前联系客服取消。"
      ],
      contact: [
        "Kakao：@yourkakaoid",
        "Telegram：@yourtelegramid"
      ],
      languageToggle: "切换为 한국어"
    },
    ko: {
      title: "계정 공유 서비스 센터",
      youtube: "YouTube Premium 공유",
      youtubeDesc: "6개월 ₩29,000｜12+1개월 ₩46,000｜24+2개월 ₩79,000",
      netflix: "Netflix 공유 계정",
      netflixDesc: "월 ₩8,000｜여러 기기 동시 시청 가능",
      gpt: "GPT Plus 계정",
      gptDesc: "월 ₩7,500｜연 ₩88,000｜자동 갱신",
      buyNow: "지금 구매하기",
      instructions: "구매 안내",
      details: [
        "결제 후 계정 정보와 사용 안내가 자동 표시됩니다.",
        "Toss / PayPal / 위챗 결제 지원.",
        "A/S 문의:",
        "계정 및 유효기간 페이지를 꼭 캡처하여 보관하세요.",
        "각 계정은 1인 전용이며 타인 공유 금지입니다.",
        "모든 계정은 자동 갱신되며 만료 전 해지 원할 시 고객센터로 문의 바랍니다."
      ],
      contact: [
        "카카오톡: @yourkakaoid",
        "텔레그램: @yourtelegramid"
      ],
      languageToggle: "Switch to 中文"
    }
  };

  const t = text[language];

  return (
    <div className="min-h-screen bg-white text-black p-6 grid gap-6">
      <div className="flex justify-end">
        <Button variant="outline" onClick={toggleLanguage}>
          🌐 {t.languageToggle}
        </Button>
      </div>

      <Image
        src="/A_webpage_screenshot_displays_subscription_sharing.png"
        alt="主视觉图"
        width={1200}
        height={400}
        className="rounded-2xl shadow-lg w-full object-cover"
      />

      <h1 className="text-3xl font-bold text-center mt-6">{t.title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-4">
            <Image
              src="/A_webpage_screenshot_displays_subscription_sharing.png"
              alt="YouTube Premium"
              width={400}
              height={200}
              className="rounded-xl mb-2"
            />
            <h2 className="text-xl font-semibold">{t.youtube}</h2>
            <p className="text-base mt-2">{t.youtubeDesc}</p>
            <Button className="mt-4 w-full" onClick={handlePurchase}>
              {t.buyNow}
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-4">
            <Image
              src="/A_webpage_screenshot_displays_subscription_sharing.png"
              alt="Netflix 合租"
              width={400}
              height={200}
              className="rounded-xl mb-2"
            />
            <h2 className="text-xl font-semibold">{t.netflix}</h2>
            <p className="text-base mt-2">{t.netflixDesc}</p>
            <Button className="mt-4 w-full" onClick={handlePurchase}>
              {t.buyNow}
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-4">
            <Image
              src="/A_webpage_screenshot_displays_subscription_sharing.png"
              alt="GPT Plus"
              width={400}
              height={200}
              className="rounded-xl mb-2"
            />
            <h2 className="text-xl font-semibold">{t.gpt}</h2>
            <p className="text-base mt-2">{t.gptDesc}</p>
            <Button className="mt-4 w-full" onClick={handlePurchase}>
              {t.buyNow}
            </Button>
          </CardContent>
        </Card>
      </div>

      {showDetails && (
        <div className="mt-8 p-6 bg-gray-100 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-4">{t.instructions}</h3>
          <ul className="list-disc pl-6 space-y-2">
            {t.details.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
            <li>
              {t.details[2]}
              <ul className="list-disc pl-6 mt-1">
                {t.contact.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
