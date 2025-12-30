import { css } from "@emotion/react";

import { Flex, Text } from "@phoenix/components";
import { ProgressCircle } from "@phoenix/components/progress/ProgressCircle";

interface ExperimentProgressIndicatorProps {
  total: number;
  completed: number;
  failed: number;
}

export function ExperimentProgressIndicator({
  total,
  completed,
  failed,
}: ExperimentProgressIndicatorProps) {
  const percentage = Math.round((completed / total) * 100);

  return (
    <Flex
      direction="row"
      gap="size-100"
      alignItems="center"
      marginTop="size-100"
    >
      <ProgressCircle
        value={percentage}
        size="S"
        aria-label="Experiment progress"
      />
      <Text color="text-700" textSize="small">
        {completed}/{total}
        {failed > 0 && (
          <span
            css={css`
              color: var(--ac-global-color-danger);
            `}
          >
            {" "}
            ({failed} failed)
          </span>
        )}
      </Text>
    </Flex>
  );
}
