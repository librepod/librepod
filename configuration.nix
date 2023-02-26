{ lib, ... }:
let
  pkgs = import (builtins.fetchGit {
    name = "nixos-22.11";
    url = "https://github.com/nixos/nixpkgs";
    # Commit hash for nixos-22.05 as of 2022-12-29
    # `git ls-remote https://github.com/nixos/nixpkgs release-22.11`
    ref = "refs/heads/release-22.11";
    rev = "e19f25b587f15871d26442cfa1abe4418a815d7d";
  }) {};
  machine = lib.strings.fileContents ./machine.txt;
in
{
  imports = [
    (./. + "/machines/${machine}")
  ];
}
