import { shallowMount } from "@vue/test-utils";
import TransactionCard from "@/components/TransactionCard/TransactionCard.vue";
import GroupByDate from "@/components/GroupByDate/GroupByDate.vue";
import { DateUtils } from "@/utils";
import { transaction } from "@/mocks";
import { CreateElement } from "vue";

describe("GroupByDate.vue", () => {
  const groupSlotSelector = '[data-testid="GroupByDate-slot"]';
  const date = new Date();

  it("test if component is rendered ", () => {
    const wrapper = shallowMount(GroupByDate, {
      propsData: { date },
    });

    expect(wrapper.exists()).toBe(true);
  });

  it("renders props.date when passed", () => {
    const wrapper = shallowMount(GroupByDate, {
      propsData: { date },
    });
    expect(wrapper.text()).toMatch(DateUtils.toString(date));
  });

  it("renders slot content", () => {
    const slot = "Good Morning";
    const wrapper = shallowMount(GroupByDate, {
      propsData: { date },
      slots: {
        default: slot,
      },
    });

    const slotContent = wrapper.find(groupSlotSelector);
    expect(slotContent.element.textContent).toMatch(slot);
  });

  it("renders a component in slot content", () => {
    const card = {
      render(h: CreateElement) {
        return h(TransactionCard, {
          props: { transaction, canShowAmount: false },
        });
      },
    };

    const wrapper = shallowMount(GroupByDate, {
      propsData: { date },
      slots: {
        default: card,
      },
    });

    const componentInSlot = wrapper.findComponent(TransactionCard);
    expect(componentInSlot.exists()).toBe(true);
  });
});
