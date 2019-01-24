# Intro 
-

# Wymagana implementacja
Używać bez API, użyć fetch("db/db.json")
Dodać możliwość zmiany statusu używając bibioteki http://paulkinzett.github.io/toolbar/

# Dane
Można sobie zmienić strukturę danych, zostały one wygenerowane
przez https://next.json-generator.com/ używając formuły

[
  {
    'repeat(1, 25)': {
      id: '{{objectId()}}',
      title: '{{firstName()}}',
      description: '{{lorem(1, "paragraphs")}}',
      status: '{{random("normal", "inprogress", "blocked", "onhold", "done")}}',
      pinned: '{{bool()}}',
      picture: 'https://source.unsplash.com/500x500',
      category: '{{company().toUpperCase()}}',
	  tags: [
        {
          'repeat(3)': '{{lorem(1, "words")}}'
        }
      ],
      registered: '{{moment(this.date(new Date(2018, 0, 1), new Date())).format("LLLL")}}'
    }
  }
]
