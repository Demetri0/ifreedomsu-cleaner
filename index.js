document.querySelectorAll("article.post .entry-content :is(p, span, div)").forEach((item) => {
  if (item.childNodes[0]?.nodeType !== Node.TEXT_NODE) {
    return;
  }
  const words = [
    "Свободный-Мир-ранобэ",
    "свободный_мир_ранобэ",
    "а й ф р и д о м",
    "С в о б о д н ы й_м и р_р а н о б э",
    "Свобоный \\| Мир \\| Ранобэ",
    "Сво бодный м ир ра нобэ",
    "(Читай на )?Айфри дом су",
    "Читай на ifreedom",
    "Айф_ридом_су",
    "айфри-дом.су",
    "айфри дом",
    "iфри_dom",
    "ifree_dom",
    "айfree_dom",
    "ай_free-dom",
    "ай-free_dom",
    "ай_free_dom(-cy)?",
    "ай-free-dom",
    "I_free_dom(-cy)?",
    "I_free-dom",
    "I-free_dom",
    "I-фри_dom",
    "I_фри_dom",
    "ifreedom",
  ]
  const reWords = new RegExp(`(${words.join('|')})`, 'ig')

  const matches = Array.from( item.textContent.matchAll(reWords) )
  if (matches.length <= 0) {
    return
  }
  console.log(matches)

  if (item.children.length > 0) {
    console.warn('Unexpected children count', item)
    return
  }

  console.log('REPLACE', item)
  item.textContent = item.textContent.replaceAll(reWords, "¯\\_(ツ)_/¯")
})

