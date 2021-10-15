
const bidsStorageKey = 'bids';
let bids;
let existingBids = retrieve();

if (existingBids) {
  bids = existingBids;
} else {
  bids = [
    {
      bidder: 'bidder1',
      bid: 1,
    },
    // {
    //   bidder: 'bidder2',
    //   bid: 35,
    // },
    // {
    //   bidder: 'bidder1',
    //   bid: 60,
    // },
    // {
    //   bidder: 'bidder2',
    //   bid: 61,
    // },
  ];
}

//function to display all of the bids on to screen
function render() {
  let bidsHtml = '';
  bids.forEach((bid) => {
    bidsHtml += `<div class="bids">
            <div>Bid: $${bid.bid}</div>
            <div style="font-size:.75em">Bidder: ${bid.bidder}</div>
        </div>`;
  });

  document.querySelector('#bids').innerHTML = bidsHtml;
}

//Adding a bid 
function addBid(user) {
  let currentBid = document.getElementById(user).value;
  console.log(bids.at(-1))
  
  if(currentBid > bids.at(-1).bid){
    bids.push({
      bid: +currentBid,
      bidder: user,
    });
    document.getElementById(user).value = '';
    render();
    save();

  }else{
    alert('Your Bid was lower than the highest bid.')
    document.getElementById(user).value = '';
  }
}

//Save bids to local Storage
function save() {
  localStorage.setItem(bidsStorageKey, JSON.stringify(bids));
}

//Retrieve from local storage
function retrieve() {
  return JSON.parse(localStorage.getItem(bidsStorageKey));
}

render();
save();

