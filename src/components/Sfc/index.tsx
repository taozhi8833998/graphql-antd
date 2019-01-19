// read more examples https://github.com/apollographql/react-apollo/blob/master/test/typescript-usage.tsx
import * as React from 'react'
import { graphql } from 'react-apollo'
import { USRINFO } from '../../queries'

interface Props {
  test: string
}

interface Data {
  userInfo: {
    name: string
  }
}

const BasicSFC = graphql<Props, Data>(USRINFO, {
  options: (props: Props) => ({
    variables: {
      solutionId: props.test,
    },
  }),
})((props) => {
  const { data } = props
  const { loading, error, userInfo } = data!
  return <div>{props.test}</div>
})

export default BasicSFC