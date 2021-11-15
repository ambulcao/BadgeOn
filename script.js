const LinksSocialMedia = {
  github: "ambulcao",
  youtube: "bulcao2011",
  facebook: "alexandre.bulcao.3",
  instagram: "alexbullcao",
  twitter: "ambulcao"
}

function changeSocialMediaLinks(){
  for (let li of socialLinks.children){
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    alert(li.children[0].href)
  }

}

changeSocialMediaLinks()
