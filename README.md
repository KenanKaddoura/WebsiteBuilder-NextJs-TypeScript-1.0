#### This is Mini Website Builder application, built using Nextjs, TypeScript, and Tailwind.

---

_The Application Link (Vercel):_[https://website-builder-next-js-type-script.vercel.app/](https://website-builder-next-js-type-script.vercel.app/)

_The Porject Repoistory on GitHub:_
[https://github.com/KenanKaddoura/WebsiteBuilder-NextJs-TypeScript-1.0](https://github.com/KenanKaddoura/WebsiteBuilder-NextJs-TypeScript-1.0)

---

#### Functional & Non-Functional Features Supported:

- [ ] Section Library (Click-to-Add)
- [ ] Preview Area
- [ ] Import/Export
- [ ] Editable Sections
- [ ] Responsive, for Desktop & Mobile
- [ ] High Performance
- [ ] Some Animations & Transitions
- [ ] SSR Friendly

---

#### The Main libraries Usded in This Project:

- react
- next
- Zustand - For State mangement
- @hello-pangea/dnd - For Drag & Drop Section
- framer-motion - For Animation
- Zod - For Imported Schema validation
- sonner

---

#### UI/UX Decisions:

The design assumes that the target user is a non-technical person. Therefore, the interface was intentionally kept simple, intuitive, and easy to learn—ideally usable with minimal guidance from the very first session.

Most of the actions, like-**Import** , **Export** , and **Clear** —are placed for direct accessibility while maintaining a clean and consistent UI.

Toasters are used as contextual guides, notifying the user when necessary.

The UI follows a uniform style, making the application more user-friendly and predictable. Users has the flexibility of edit and replace all information live within the section.

Actions are intentionally split between the right and left sides of the screen to preserve balance and avoid button overcrowding in one area. While grouping all buttons on the right might have seemed more consistent, it would have created visual imbalance and increased the risk of misclicks due to crowding.

---

#### Implementation Decisions:

Given the project’s small scope and straightforward requirements, there were limited architectural decisions to make. However, some technology and library choices are worth justifying:

- **Drag and Drop:**
  Two solid options were considered — **dnd-kit** and **hello-pangea/dnd** . While dnd-kit is more flexible, it is also more complicated to implement. So, I opted for **hello-pangea/dnd** because it meets the project’s needs directly and allows for a faster, simpler implementation without unnecessary complexity.

- **State Management:**
  Although React Context could have been used, **Zustand** was chosen. Zustand offers simpler state management with minimal boilerplate and re-renders components individually, rather than triggering a full tree re-render, resulting in better performance and maintainability.
