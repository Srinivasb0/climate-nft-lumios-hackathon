// SPDX-License-Identifier: MIT

// address : 0xDa2f3429A03887FE1Eda62A43a96a5b84e4d8F94

pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
contract ReviseNFT is ERC721 {
    string baseuri = "";
    constructor(string memory _baseuri) ERC721("Dynamic NFT", "dNFT") {
        baseuri = _baseuri;
    }
    function mint(address to, uint256 tokenId) public {
        _safeMint(to, tokenId);
    }
    function _baseURI() internal view override(ERC721) returns (string memory) {
        return baseuri;
    }
}