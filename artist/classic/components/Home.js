import { useQuery } from "@apollo/react-hooks"
import { NetworkStatus } from "apollo-client"
import gql from "graphql-tag"
import ErrorMessage from "./ErrorMessage"
import PostUpvoter from "./PostUpvoter"

export const WEBSITE_QUERY = gql`
  query {
    website: websites_by_pk(id: 3) {
      title
      description
      keywords
    }
  }
`

export default function Home() {
  const { loading, error, data } = useQuery(
    WEBSITE_QUERY
  )

  if (loading) return <p>...</p>;
  if (error) return <ErrorMessage message="Error loading posts." />

  return <h1>{data.website.title}</h1>
}
