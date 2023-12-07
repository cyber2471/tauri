import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const ssr = false;
async function load() {
  let username = "astems";
  let email = "cyberpark00002@astems.co.kr";
  let jdata = { "BILL_INFO": [
    {
      "ORDER_ITEM": [
        {
          "GOODS_CD": "GD0001",
          "GOODS_NM": "몬스터와퍼",
          "QTY": 1,
          "SUBITEM": [
            { "GOODS_CD": "GD0004", "GOODS_NM": "양파", "QTY": -1, "PROC_TYPE": 1 },
            { "GOODS_CD": "GD0005", "GOODS_NM": "양상추", "QTY": -1, "PROC_TYPE": 1 },
            { "GOODS_CD": "GD0006", "GOODS_NM": "할라피뇨", "QTY": 1, "PROC_TYPE": 2 },
            { "GOODS_CD": "GD0007", "GOODS_NM": "치즈1장", "QTY": 1, "PROC_TYPE": 2 },
            { "GOODS_CD": "GD0008", "GOODS_NM": "아메리카노", "QTY": 1, "PROC_TYPE": 3 }
          ]
        },
        { "GOODS_CD": "GD0002", "GOODS_NM": "기네스머쉬룸와퍼", "QTY": 2 },
        { "GOODS_CD": "GD0003", "GOODS_NM": "너겟킹4조각", "QTY": 3 }
      ]
    },
    { "ORDER_NUM": "ORD001" },
    { "ORDER_DATE": "20231012" },
    { "ORDER_TYPE": "eat-in" },
    { "SALE_DATE": "20231012" },
    { "POS_NO": "01" },
    { "BILL_NO": "0001" },
    { "MEMO": "양파/양상추 제외하고, 할라피뇨/치즈 추가 음료는 아메리카노로 변경" }
  ] };
  let id = 1;
  try {
    const newUser = await prisma.user.update({
      where: { id: Number(id) },
      data: {
        name: username,
        email,
        updatedAt: /* @__PURE__ */ new Date(),
        jsondata: jdata
      }
    });
    console.log("success!!\n%s", newUser);
  } catch (error) {
    console.log("error!!:%s", error);
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load,
  ssr: ssr
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-8eebd2a0.js')).default;
const universal_id = "src/routes/+page.js";
const imports = ["_app/immutable/nodes/2.7f29229e.js","_app/immutable/chunks/index.472b9089.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=2-78b39e5b.js.map
