### Development
Clone the repo with your newly generated Personal Access Token (PAT):
git clone https://{username}:{PAT}@github.com/librepod/librepod.git

### Https with Traefik

We use self-signed certificates generated by the `mkcert` utility on the
LibrePod host. `mkcert` creates a default Certificate Authority located in the
`/root/.local/share/mkcert` folder. This CA is the default one and is used to
generate all the self-signed certificates which are used by Traefik Proxy.
The mechanics of this as follows:
1. File __ca-certs.nix__ defines few systemd services. One of them calls `mkcert
   install` which creates default CA, then it creates self-signed certificates
   in the __/exports/k3s/certs__ folder. After that it creates a K8S TLS secret
   refering to newly generated certificates.
2. The other systemd service is triggered monthly by a corresponding systemd timer
   service and just creates another pair of certificates as well as
   deletes old K8S TLS secret and creates a new one referring to new
   certs.
3. There is Traefik CRD named TLSStore which sets default Traefik TLS key to
   the TLS secret we create based on the self-signed certs produced by
   `mkcert`.
