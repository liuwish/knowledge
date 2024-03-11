## 在线调试地址
https://next.api.aliyun.com/document/ecd/2020-09-30/overview

### 创建用户
https://next.api.aliyun.com/api/eds-user/2021-03-08/CreateUsers?spm=a2c4g.437832.0.i3

### 为桌面分配用户
https://next.api.aliyun.com/api/ecd/2020-09-30/ModifyEntitlement?params={%22RegionId%22:%22cn-beijing%22,%22DesktopId%22:%22ecd-a8as6o5481zcgpozw%22,%22EndUserId%22:[%22liuweishi2%22]}&tab=DEBUG

### 工作区创建
```
// This file is auto-generated, don't edit it. Thanks.
package com.aliyun.sample;

import com.aliyun.tea.*;

public class Sample {

    /**
     * 使用AK&SK初始化账号Client
     * @param accessKeyId
     * @param accessKeySecret
     * @return Client
     * @throws Exception
     */
    public static com.aliyun.ecd20200930.Client createClient(String accessKeyId, String accessKeySecret) throws Exception {
        com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config()
                // 必填，您的 AccessKey ID
                .setAccessKeyId(accessKeyId)
                // 必填，您的 AccessKey Secret
                .setAccessKeySecret(accessKeySecret);
        // 访问的域名
        config.endpoint = "ecd.cn-beijing.aliyuncs.com";
        return new com.aliyun.ecd20200930.Client(config);
    }

    public static void main(String[] args_) throws Exception {
        java.util.List<String> args = java.util.Arrays.asList(args_);
        // 工程代码泄露可能会导致AccessKey泄露，并威胁账号下所有资源的安全性。以下代码示例仅供参考，建议使用更安全的 STS 方式，更多鉴权访问方式请参见：https://help.aliyun.com/document_detail/378657.html
        com.aliyun.ecd20200930.Client client = Sample.createClient("accessKeyId", "accessKeySecret");
        com.aliyun.ecd20200930.models.CreateSimpleOfficeSiteRequest createSimpleOfficeSiteRequest = new com.aliyun.ecd20200930.models.CreateSimpleOfficeSiteRequest()
                .setRegionId("cn-beijing")
                .setCidrBlock("172.16.0.0/12");
        com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
        try {
            // 复制代码运行请自行打印 API 的返回值
            client.createSimpleOfficeSiteWithOptions(createSimpleOfficeSiteRequest, runtime);
        } catch (TeaException error) {
            // 如有需要，请打印 error
            com.aliyun.teautil.Common.assertAsString(error.message);
        } catch (Exception _error) {
            TeaException error = new TeaException(_error.getMessage(), _error);
            // 如有需要，请打印 error
            com.aliyun.teautil.Common.assertAsString(error.message);
        }        
    }
}
```
{
  "OfficeSiteId": "cn-beijing+dir-2472192570",
  "RequestId": "4B005C34-DCCA-55A1-8CC0-83BEAA3AE8C0"
}

#### 获取GetLoginToken
https://next.api.aliyun.com/api/ecd/2020-10-02/GetLoginToken?params=%7B%22RegionId%22:%22cn-hangzhou%22,%22ClientId%22:%22f4a0dc8e-1702-4728-9a60-95b27a35****%22,%22OfficeSiteId%22:%22cn-hangzhou%2Bdir-885351****%22%7D&tab=DEMO&lang=JAVA
```
// This file is auto-generated, don't edit it. Thanks.
package com.aliyun.sample;

import com.aliyun.tea.*;

public class Sample {

    /**
     * 匿名方式初始化账号Client
     * @return Client
     * @throws Exception
     */
    public static com.aliyun.ecd20201002.Client createClient() throws Exception {
        // 支持匿名访问的 API，不需要 AccessKey ID 等鉴权配置
        com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config();
        // 访问的域名
        config.endpoint = "ecd.cn-beijing.aliyuncs.com";
        return new com.aliyun.ecd20201002.Client(config);
    }

    public static void main(String[] args_) throws Exception {
        java.util.List<String> args = java.util.Arrays.asList(args_);
        // 初始化 Client，采用匿名访问的方式，更多鉴权访问方式请参见：https://help.aliyun.com/document_detail/378657.html
        com.aliyun.ecd20201002.Client client = Sample.createClient();
        com.aliyun.ecd20201002.models.GetLoginTokenRequest getLoginTokenRequest = new com.aliyun.ecd20201002.models.GetLoginTokenRequest()
                .setRegionId("cn-beijing")
                .setOfficeSiteId("cn-beijing+dir-4417333040")
                .setClientId("f4a0dc8e-1702-4728-9a60-95b27a35abcd")
                .setCurrentStage("ADPassword")
                .setEndUserId("liuweishi")
                .setPassword("liuweishi123@");
        com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
        try {
            // 复制代码运行请自行打印 API 的返回值
            client.getLoginTokenWithOptions(getLoginTokenRequest, runtime);
        } catch (TeaException error) {
            // 如有需要，请打印 error
            com.aliyun.teautil.Common.assertAsString(error.message);
        } catch (Exception _error) {
            TeaException error = new TeaException(_error.getMessage(), _error);
            // 如有需要，请打印 error
            com.aliyun.teautil.Common.assertAsString(error.message);
        }        
    }
}

result
{
  "Email": "",
  "RequestId": "6E2FD8E2-84E8-5FA3-8413-70B746E66EE5",
  "Label": "",
  "Props": {
    "environment": "online"
  },
  "Secret": "",
  "TenantId": 1968017662539505,
  "EndUserId": "liuweishi",
  "QrCodePng": "",
  "Phone": "",
  "LoginToken": "v1cf2b4ba54168d55288716849218518310755107176f78e93ab2d3492e285d685d8d5507dccc709b934b2add07a70edc3",
  "NextStage": "",
  "SessionId": "d8e707f3-1cf3-4dc0-9c45-636cf474e291"
}

```
整体流程：

创建桌面->创建用户->分配用户到桌面->获取token和sessionId,生成url，fram打开

- DesktopId
- SessionId
- LoginToken
- RegionId
```
https://wuying.aliyun.com/deskTop?LoginToken=v1cf2b4ba54168d55288716849218518310755107176f78e93ab2d3492e285d685d8d5507dccc709b934b2add07a70edc3&DesktopId=ecd-a8as6o5481zcgpozw&RegionId=cn-beijing&SessionId=d8e707f3-1cf3-4dc0-9c45-636cf474e291
```