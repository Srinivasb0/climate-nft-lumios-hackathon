// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract SeedToken is ERC721, ERC721URIStorage, Ownable { 
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    // Meta data information
    string [] ImgURI = [
        "https://i.etsystatic.com/37255236/r/il/ba66ad/4157748303/il_1588xN.4157748303_rm3r.jpg",
        "https://i.etsystatic.com/37255236/r/il/6f0f8e/4194992453/il_1588xN.4194992453_fkj2.jpg",
        "https://i.etsystatic.com/37255236/r/il/12f9e6/4147335276/il_1588xN.4147335276_h1k1.jpg"
    ];

    constructor() ERC721("DollyToken", "DLTK") {}

    function safeMint(address to) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, ImgURI[0]);
    }

    function changeDolly(uint256 _tokenId) public {
        uint256 tokenId = _tokenId + 1;

        // store uri in memory
        string memory newUri = "https://i.etsystatic.com/37255236/r/il/6f0f8e/4194992453/il_1588xN.4194992453_fkj2.jpg";

        // set new uri
        _setTokenURI(tokenId, newUri);
    }


    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}