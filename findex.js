function pagereload() {
  document.getElementById('name1').value='';
  document.getElementById('name2').value='';
  location.reload();
};
function findfortune() {

  var ar="FLAMES",check;
  var n,place=0,j=0,i=0,cnt=0;
  var a,b;
  var len_a,len_b,count_a=0,count_b=0,count,k=0,flag=0;
  a=document.getElementById('name1').value;
  b=document.getElementById('name2').value;

  len_a=a.length;
  len_b=b.length;

  for(i=0;i<=len_a;i++)
  {
    if(a[i]==' ')
    {  i++;
    }
    for(j=0;j<len_b;j++)
    {
      if(b[j]==' ')
      {
       j++;
      }
      if(a[i]==b[j])
        {

          a=a.replace(a[i],'*');
          b=b.replace(b[j],'*');

        }
    }
  }
  console.log("a value is ",a);
  console.log("b value is ",b);
  for(i=0;i<len_a;i++)
  {

  if(a[i]!='*' && a[i]!=' ')
    {

  //  console.log("charcter value is ",a[i]);

      count_a++;

    }
  }
//  console.log("count  value of a is ",count_a);
  for(i=0;i<len_b;i++)
  {
  if(b[i]!='*' && b[i]!=' ')
      {

  //  console.log("charcter value is ",b[i]);
        count_b++;
      }
  }
//  console.log("count  value of b is ",count_b);
  count=count_a+count_b;

//  console.log("count  value is ",count);
//claculaton
i=0;
n=count-1;
  while(i<5)
  {
     cnt=0;
  while(cnt<=n)
  {

      if(ar[place]=='*')
        {
          place++;
        }
      if(ar[place]!='*')
      {
        while(ar[place]!='*' && place<=5 && cnt!=n)
        {
          place++;
          cnt++;
        }
        if(cnt==n && ar[place]!='*' && place<=5)
          {
            ar=ar.replace(ar[place],"*");

            place++;
            i++;
            cnt++;
          }
        if(place>5)
        {
          place=0;
        }
      }

      }

  }
  //  console.log("Final string  is  ",ar);
for(i=0;i<=5;i++)
  {
    if(ar[i]!='*')
      {
        check=ar[i];
      }
  }
//  console.log("Final CHarcetr is  ",check);
  if(check=='F')
    {

    document.getElementById('print').innerHTML="FRIENDS";
  }
  else if(check=='L')
    {

      document.getElementById('print').innerHTML="LOVE";
    }
  else if(check=='A')
      {
        document.getElementById('print').innerHTML="Affair";
    }
  else if(check=='M')
    {

      document.getElementById('print').innerHTML="Marriage";
    }
  else if(check=='E')
      document.getElementById('print').innerHTML="Enemy";
  else
    {

      document.getElementById('print').innerHTML="Sister";
    }

};
