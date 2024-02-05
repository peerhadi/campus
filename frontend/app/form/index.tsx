import { TextField, FormControlLabel, Checkbox, Grid } from '@mui/material'

type Component = {
    name?: string
    gridSize?: number
    label: string
    type: ComponentType
    id: string
}

type ComponentType = 'checkbox' | 'text' | 'password'

type FormProps = {
    data: any
    components: Array<Component>
    onChange: (id: String, value: any) => void
}

export default function Form({ data, components, onChange }: FormProps) {
    return (
        <div className="form">
            {components.map((component: Component) => {
                let gridSize = component.gridSize === 6 ? 200 : 400
                switch (component.type) {
                    case 'checkbox':
                        return (
                            <Grid sm={component.gridSize ?? 12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="yes"
                                            color="primary"
                                            id={component.id}
                                            checked={data[component.id]}
                                            onChange={(e) =>
                                                onChange(
                                                    component.id,
                                                    e.target.checked,
                                                )
                                            }
                                        />
                                    }
                                    label={component.label}
                                />
                            </Grid>
                        )
                    case 'text':
                    case 'password':
                        return (
                            <Grid sm={component.gridSize ?? 12}>
                                <TextField
                                    margin="normal"
                                    required
                                    sx={{ width: 400 }}
                                    fullWidth
                                    name={component.name}
                                    label={component.label}
                                    type={component.type}
                                    id={component.id}
                                    value={data[component.id]}
                                    onChange={(e) =>
                                        onChange(component.id, e.target.value)
                                    }
                                />
                            </Grid>
                        )
                    default:
                        throw new Exception(`Unknown type: ${component.type}`)
                }
            })}
        </div>
    )
}
