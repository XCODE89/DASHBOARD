import React from 'react'
import { connect } from 'react-redux'
import Layout from "../../hocs/layout/Layout"

const Home = () => {
  return (
    <Layout>  
        <div>Home</div>
    </Layout>
  )
}

const mapStateToProps = (state) => ({

})

export default connect( mapStateToProps,{

}) (Home)