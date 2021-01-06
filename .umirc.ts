/*
 * @Date: 2020-06-24 13:45:15
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-09-30 16:46:21
 * @FilePath: /hooooks/hooooks_doc/.umirc.ts
 */

export default {
    title: "hooooks",
    base: "/hooooks-doc",
    publicPath: "/hooooks-doc/",
    exportStatic: {},
    extraBabelPlugins: [
        [
            "import",
            {
                libraryName: "antd",
                style: "css",
            },
        ],
    ],
    resolve: {
        includes: ["docs"],
    },
    logo:
        "data:image/png;base64,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",
};
