// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { mock, toJSONSchema } from "mockjs";
//生成字符串   "prpertyName|rule":value
class MockString {
  typeOne(): any {
    return mock({
      "name|1-10": [
        {
          "index|1-2": "hp",
        },
      ],
    });
  }
  typeTwo(): any {
    const i = Math.random() * 10;
    return mock({
      "price|10": [
        {
          "${i}|10-999.55-99": 55,
        },
      ],
    });
  }
}
//生成数字
class MockNum {
  type01(): any {
    return mock({
      "count|": 0,
      email: "@email",
    });
  }
}
class MockJson {
  type01(): any {
    const template = {
      name: "cfanlei",
      "key|1-10": "★",
    };
    return toJSONSchema(template);
  }
}
//快速入门
class MockData {
  showList(): any {
    const data = mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      "list|1-10": [
        {
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          "id|+1": 1,
        },
      ],
    });
    return data;
  }
}
export { MockString, MockData, MockNum, MockJson };
