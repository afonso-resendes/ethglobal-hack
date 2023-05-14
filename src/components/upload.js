
// const ipfs = ipfsClient(); // Connect to the local IPFS API
import { create } from 'ipfs-http-client'
import { Buffer } from 'buffer'

/* configure Infura auth settings */
const projectId = "2PkzI0wyR3M08EkxAlr4jMXxDZ1"
const projectSecret = "ee305476603c7936b7ec8bf995a55f59"
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64')

/* Create an instance of the client */
const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
      authorization: auth,
  }
})

export async function uploadJson(data) {
  const added = await client.add(JSON.stringify(data))
  const uri = `ipfs://${added.path}`
  console.log('uri: ', uri)
  return uri
};
