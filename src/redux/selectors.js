import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = ({contacts}) => contacts.items;
export const selectFilter = ({ filter }) => filter;

export const selectFilteredContacts = createSelector([selectContacts, selectFilter], (items, filter) => {
  if (!filter) {
    return items;
  };

  return items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
});

export const selectIsLoading = ({contacts}) => contacts.isLoading;
export const selectError = ({contacts}) => contacts.error;