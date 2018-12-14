chrome.storage.sync.get('total',function(budget){
    if(budget.total)
        document.getElementById('total').innerHTML = budget.total;
})

document.getElementById('spend').addEventListener("click",function(){
    chrome.storage.sync.get('total',function(budget){
        var newtotal=0;
        if(budget.total){
            newtotal += parseInt(budget.total);
        }
        var amount=document.getElementById('amount').value;
        newtotal+=parseInt(amount);
        document.getElementById('amount').value = 0;
        chrome.storage.sync.set({'total': newtotal}, function() {
            document.getElementById('total').innerHTML = newtotal;
        });
        
    });
});

