let tags = []
let tagContainer = document.querySelector('.tag-container')
let input = tagContainer.querySelector('input')

const addTags = (event) => {
  // console.log(input.value);
  // console.log(event.key);

  const keyPressedIsEnter = event.key === 'Enter'

  if (keyPressedIsEnter) {
    // console.log(input.value.split(','))
    input.value.split(',').forEach(tag => {
      // console.log(tag);
      if (tag) {
        tags.push('#' + tag.replace(/\s/g, ''))
      }
    })

    // console.log(tags);
    updateTags()
    input.value = ""
  }


}

const updateTags = () => {
  clearTags()

  tags.slice().reverse().forEach(tag => {
    tagContainer.prepend(createTag(tag))
  })
}

const createTag = (tag) => {
  // console.log(tag);

  const div = document.createElement('div')
  div.classList.add('tag')

  const span = document.createElement('span')
  span.innerHTML = tag
  div.append(span)

  const i = document.createElement('i')
  i.classList.add('close')
  i.setAttribute('data-id', tag)
  i.onclick = removeTag
  span.append(i)

  return div
}

const removeTag = (event) => {
  const buttonClose = event.currentTarget
  const id = buttonClose.dataset.id
  const tagIndex = tags.indexOf(id)
  tags.splice(tagIndex, 1)

  updateTags()
}

const clearTags = () => {
  tagContainer
    .querySelectorAll('.tag')
    .forEach(tagElement => tagElement.remove())
}

input.addEventListener('keyup', addTags)
