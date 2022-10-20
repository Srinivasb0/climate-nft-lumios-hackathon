// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PeasForClimate is ERC721, ERC721URIStorage, Ownable {

    uint256 private _first_seed_date = 1665790200;

    constructor() ERC721("PeasForClimate", "PEAS") {}

    function setFirstSeedTimestamp(uint256 newTimestamp) external onlyOwner {
        _first_seed_date = newTimestamp;
    }

    function safeMint(address to, uint256 tokenId, string memory uri)
        public
        onlyOwner
    {
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
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

    function total_days() public view returns(string memory) {
        uint256 _b = block.timestamp;        
        uint256 seconds_per_cycle = 3456000;
        uint256 total_secs = _b - _first_seed_date;
        uint256 currentsecs = total_secs % seconds_per_cycle;

        if ((currentsecs > 0) && (currentsecs < 1296000)) {
            return "seed";
        } else if ((currentsecs > 1296000) && (currentsecs < 3456000)) {
            return "germination";
        } else if ((currentsecs > 3456000) && (currentsecs < 6912000)) {
            return "flower";
        } else if ((currentsecs > 6912000) && (currentsecs < 10368000)) {
            return "harvest";
        }
        else {
            return "seed";
        }
    }
}