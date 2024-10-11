import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalancebox from '@/components/TotalBalancebox'
import RightSidebar from '@/components/RightSidebar'
import { getLoggedInUser } from '@/lib/actions/user.actions'

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className='home'>
        <div className="home-content">
            <header className="home-header">
            <HeaderBox
                    type ="greeting"
                    title="Welcome"
                    user= { loggedIn ?.name || 'Guest'}
                    subtext = "Access and massage your account and transactions efficiently."
                    />
                    <TotalBalancebox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.36}
                    />
            </header>

            RECENT TRANSECTIONS
        </div>

        <RightSidebar
        user={loggedIn}
        transaction={[]}
        banks={[{currentBalance: 123.45}, {currentBalance:543.21}]}
        />
    </section>
  )
}

export default Home