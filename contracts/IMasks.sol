// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity >=0.6.0;

import "@openzeppelin/contracts/token/ERC721/IERC721Enumerable.sol";

interface IMasks is IERC721Enumerable {
    function isMintedBeforeReveal(uint256 index) external view returns (bool);
}