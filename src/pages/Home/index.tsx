import * as React from 'react'
import { PureComponent } from 'react'
import { withRouter, RouteComponentProps } from "react-router-dom"
import { Spin } from 'antd'
import { Query } from 'react-apollo'
import { StoreConsumer, ContextStore } from '../../store'
import { USRINFO } from '../../queries'
import './index.css'

interface Props extends RouteComponentProps<any> {}

@(withRouter as any)
class Home extends PureComponent<Props, {}> {

  render() {
    return <StoreConsumer>
      {
        (context: ContextStore) => {
          return <Query query={USRINFO}>
            {
              ({ loading, data, error }) => {
                const com = <div className="loading"><Spin size="large" /></div>
                if (loading) return com
                if (error) return <div>{ error.message }</div>
                const name = context.store.commonManager.getValueByKeys(['userInfo', 'name'], data, 'unknow')
                return <div>{name}</div>
              }
            }
          </Query>
        }
      }
    </StoreConsumer>
  }
}

export default Home