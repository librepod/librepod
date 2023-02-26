{ config, pkgs, machineConfig, ... }:
{
  environment.variables = {
    EDITOR = "nvim";
  };

  programs.zsh = {
    enable = true;
    syntaxHighlighting.enable = true;
    interactiveShellInit = ''
      source ${pkgs.grml-zsh-config}/etc/zsh/zshrc
    '';
    promptInit = ""; # otherwise it'll override the grml prompt
  };

  environment.systemPackages = with pkgs; [
    frp
    gawk
    git
    gnumake
    jq
    kubernetes-helm
    mkcert
    neovim
  ];

  imports = [
    (import ./ca-certs.nix { inherit config pkgs machineConfig; })
    (import ./frpc-config.nix { inherit config pkgs machineConfig; })
  ];

  system.stateVersion = "21.11";
}
