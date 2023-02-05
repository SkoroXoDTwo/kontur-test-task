const textToAsciiArt = require("./solution");

describe("textToAsciiArt", () => {
    it("8", async () => {
        const str = "8";
        const expected = `### 
# # 
### 
# # 
### `;
        const result = await textToAsciiArt(str);
        expect(result).toEqual(expected);
    });

    it("D", () =>
        expect(textToAsciiArt("D")).resolves.toEqual(`##  
# # 
# # 
# # 
##  `));

    it("PROFIT 142%", () =>
        expect(textToAsciiArt("PROFIT 142%")).resolves
            .toEqual(`##  ##   #  ### ### ###      #  # # ### # # 
# # # # # # #    #   #      ##  # #   #   # 
##  ##  # # ##   #   #       #  ### ###  #  
#   # # # # #    #   #       #    # #   #   
#   # #  #  #   ###  #      ###   # ### # # `));

    it("Very STRONG P@$$w0rD qwerty 12345", () =>
        expect(
            textToAsciiArt("Very STRONG P@$$w0rD qwerty 12345")
        ).resolves.toEqual(
            `# #                  ## ### ##   #  ###  ##     ##  ###  ##  ##     ###     ##                       #           #  ### ### # # ### 
# # ### ### # #     #    #  # # # # # # #       # # # # ##  ##  # # # # ### # #     ### # # ### ### ### # #     ##    #   # # # #   
# # ##  #   ###      #   #  ##  # # # # # #     ##  #   ### ### ### # # #   # #     # # ### ##  #    #  ###      #  ###  ## ### ### 
# # ### #     #       #  #  # # # # # # # #     #   ###  ##  ## ### # # #   # #     ### ### ### #    ##   #      #  #     #   #   # 
 #          ###     ##   #  # #  #  # #  ##     #       ##  ##      ###     ##        #                 ###     ### ### ###   # ### `
        ));
});
