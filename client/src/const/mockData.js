export const selectDesignation = {
  id: "designation",
  name: "designation",
  placeholder: "Designation",
  required: true,
  type: "select",
  selectOpts: {
    "Department 01": [
      { value: "designation1", label: "Designation 1" },
      { value: "designation2", label: "Designation 2" },
    ],
    "Department 02": [
      { value: "designation1", label: "Designation 1" },
      { value: "designation2", label: "Designation 2" },
    ],
  },
};

export const selectBranch = {
  id: "branch",
  name: "branch",
  placeholder: "Select Branch",
  required: true,
  type: "select",
  selectOpts: {
    "Select Branch": [
      { value: "dagun", label: "Dagun Bhuiyan" },
      { value: "feni", label: "Feni" },
    ],
  },
};

export const selectItem = {
  id: "item",
  name: "item",
  placeholder: "Select Item",
  required: true,
  type: "select",
  selectOpts: {
    "Select Item": [
      { value: "item-1", label: "Item 01" },
      { value: "item-2", label: "Item 02" },
    ],
  },
};
