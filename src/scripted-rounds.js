let rounds = {
    turns: [
        {
            turnName: 'Round 1',
            events:[
                {
                    eventTypeOf: 'dialog',
                    character: 'Local Disasterville Agent',
                    line: 'Welcome to Disasterville and congratulations on your new job and apartment! ',
                    actions:[
                        {
                            actionText: 'Next',
                            action: action.advance
                        }
                    ]     
                       
}, 
{
    eventTypeOf: 'dialog',
    character: 'Local Disasterville Agent',
    line: 'Oh yeah- while Disasterville is a lovely place to stay things can get a little...chaotic. On that note- did you want to buy renters insurance for that new place? Just in case? ',
    actions:[
        {
            actionText: 'Buy cheap renter\'s insurance ',
            action: action.buyCheap
        },
        {
            actionText: 'Buy premium renter\'s insurance ',
            action: action.buyPremium
        },
        {
            actionText: 'Decline coverage ',
            action: action.decline
        },
    ]     
       
}, 
            ], 
        },
        {
            turnName: "Round 2",
            events:[
                {
                    eventTypeOf: 'dialog',
                    character: 'game',
                    line: 'It\'s Pay Day! You have 500 golds deposited into your account',
                }, 
               {
                eventTypeOf: 'gain',
                eventResult: eventResult.increaseFunds
               },
              {
                actionText: 'Next',
                action: action.advance
              }

            ]
        }, 
        {
            turnName: "Round 3",
            events:[
                {
                    eventTypeOf: 'loss',
                    character: 'Local Disasterville Agent',
                    eventDescrition: 'Holy Trash Pandas! While you were at work a gang of rabid raccoons broke into your house and chewed up all of your furniture. Yikes. Good thing we sell coverage for vandalism of property. You did buy the covereage right?',
                    eventCost: 200,
                    eventResult: eventResult.decreaseFunds 

                }
            ]
        }
    ]
}
    