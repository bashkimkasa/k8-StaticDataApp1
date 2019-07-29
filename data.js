var data = {
  users: [
    {
      userId: "app1_user1",
      username: "app1_user1@test.com",
      displayName: "App 1 Test User 1",
      firstName: "App 1 Test",
      lastName: "User 1",
      status: "ACTIVE"
    },
    {
      userId: "app1_user2",
      username: "app1_user2@test.com",
      displayName: "App 1 Test User 2",
      firstName: "App 1 Test",
      lastName: "User 2",
      status: "STAGED"
    },
    {
      userId: "app1_user3",
      username: "app1_user3@test.com",
      displayName: "App 1 Test User 3",
      firstName: "App 1 Test",
      lastName: "User 3",
      status: "ACTIVE"      
    }
  ],
  subscriptions: [
    {
      subscriptionId: "app1_subscription1",
      productId: "app1_product1",
      country: "US",
      companyName: "app1_company1",
      status: "ACTIVE",
      plans: [
        {
          planId: "plan1"
        },
        {
          planId: "plan2"
        }
      ]
    },
    {
      subscriptionId: "app1_subscription2",
      productId: "app1_product2",
      country: "US",
      companyName: "app1_company2",
      status: "ACTIVE",
      plans: [
        {
          planId: "plan2"
        }
      ]
    },
    {
      subscriptionId: "app1_subscription3",
      productId: "app1_product3",
      country: "US",
      companyName: "app1_company3",
      status: "ACTIVE",
      plans: [
        {
          planId: "plan1"
        }
      ]
    }        
  ],
  memberships: [
    {
      userId: "app1_user1",
      subscriptionId: "app1_subscription1",
      roles: ["Admin", "Manager"]
    },
    {
      userId: "app1_user1",
      subscriptionId: "app1_subscription2",
      roles: ["Admin"]
    },
    {
      userId: "app1_user1",
      subscriptionId: "app1_subscription3",
      roles: ["User"]
    },
    {
      userId: "app1_user2",
      subscriptionId: "app1_subscription1",
      roles: ["Admin"]
    },
    {
      userId: "app1_user2",
      subscriptionId: "app1_subscription2",
      roles: ["Admin", "Manager"]
    },
    {
      userId: "app1_user3",
      subscriptionId: "app1_subscription3",
      roles: ["Admin"]
    }
  ]
}

module.exports = data;